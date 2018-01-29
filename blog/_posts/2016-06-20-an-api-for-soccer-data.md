---
title: An API for Soccer Data
date: 2016-06-20 20:16:00
---

A few days ago, I was looking for a way to get soccer data without having to do too much heavy lifting, and stumbled upon this delightful API: [football-data.org](http://football-data.org). It's not fancy, but it works well.

Right now you have to request everything (seasons, leagues, teams, players, and fixtures) by id, which is kind of painful. Although, once you find an id, you are off running.

Here's a quick Python script to get all the players across Europe's major leagues (avoiding rate limits) and store them in a `.csv`. Alternatively, download all 5,000+ players [here](/blog/assets/2016/3/players.csv).

```python
import csv
from enum import Enum
import re
from requests.packages.urllib3.util import Retry
from requests.adapters import HTTPAdapter
from requests import Session, exceptions


class FootballDataApi(object):
  url = "http://api.football-data.org/v1/"

  def __init__(self, key):
    super(FootballDataApi, self).__init__()
    self.key = key

  class Endpoint(Enum):
    seasons = "soccerseasons/"
    teams = "soccerseasons/{}/teams"
    players = "teams/{}/players"

  def getRequest(self, endpoint):
    s = Session()
    s.mount(self.url, HTTPAdapter(
        max_retries=Retry(total=5, status_forcelist=[429], backoff_factor=45)
        )
    )
    headers = {
      "X-Auth-Token": self.key,
      "X-Response-Control": "minified"
    }
    r = s.get(url=self.url + endpoint, headers=headers)
    print("GET {}".format(self.url + endpoint))
    json = r.json()
    return json

  def getSeasons(self):
    seasons = self.getRequest(self.Endpoint.seasons.value)
    return seasons

  def getTeams(self, season_id):
    season = self.getRequest(self.Endpoint.teams.value.format(season_id))
    return season["teams"]

  def getPlayers(self, team_id):
    team = self.getRequest(self.Endpoint.players.value.format(team_id))
    return team["players"]
```

The API wrapper above helps you get all the leagues, players, and teams in a jiff. Just pop in your API key ([sign up here](http://api.football-data.org/register)) and play some Fifa while you wait.

```python
# API Set up
key = "YOUR API KEY HERE"
api = FootballDataApi(key)


# SEASONS
print("======================================")
print("Getting seasons.")
print("======================================")

seasons = api.getSeasons()
leagues = [ {
    "league_id": league["id"],
    "league_name": league["caption"],
    "league_short_name": league["league"],
    "league_year": league["year"]
  }
  for league in seasons ]

print("======================================")
print("Got {} leagues.".format(len(leagues)))
print("======================================")


# TEAMS
print("Getting teams.")
print("======================================")

teams = []
for league in leagues:
  league_teams = api.getTeams(league["league_id"])
  for lteam in league_teams:
    team = {
      "team_id": lteam["id"],
      "team_name": lteam["name"],
      "team_short_name": lteam["shortName"],
      "team_market_value": lteam["squadMarketValue"],
      "team_crest": lteam["crestUrl"],
      "league_id": league["league_id"],
      "league_name": league["league_name"],
      "league_short_name": league["league_short_name"],
      "league_year": league["league_year"]
    }
    teams.append(team)

print("======================================")
print("Got {} teams.".format(len(teams)))
print("======================================")


# PLAYERS
print("Getting players.")
print("======================================")

players = []
for team in teams:
  print("======================================")
  print("{}".format(team["team_name"].upper()))
  print("======================================")
  team_players = api.getPlayers(team["team_id"])
  for tplayer in team_players:
    print("{}: {} ({})".format(tplayer["jerseyNumber"], tplayer["name"], tplayer["position"]))
    market_value = tplayer["marketValue"]
    if market_value is not None:
      market_value = re.sub("[^\d\.]", "", market_value)

    player = {
      "id": tplayer["id"],
      "jersey_number": tplayer["jerseyNumber"],
      "name": tplayer["name"],
      "nationality": tplayer["nationality"],
      "position": tplayer["position"],
      "birth_date": tplayer["dateOfBirth"],
      "contract_until": tplayer["contractUntil"],
      "market_value": market_value,
      "team_id": team["team_id"],
      "team_name": team["team_name"],
      "team_short_name": team["team_short_name"],
      "team_market_value": team["team_market_value"],
      "team_crest": team["team_crest"],
      "league_id": league["league_id"],
      "league_name": league["league_name"],
      "league_short_name": league["league_short_name"],
      "league_year": league["league_year"]
    }
    players.append(player)

print("======================================")
print("Got {} players.".format(len(players)))
print("======================================")


# WRITE TO CSV
filename = "players.csv"
print("Writing `players` to `{}`...".format(filename))
print("======================================")

with open(filename, "w") as csvfile:
  fieldnames = [
      "id", "jersey_number", "name", "nationality", "position", "birth_date",
      "contract_until", "market_value", "team_id", "team_name", "team_short_name",
      "team_market_value","team_crest","league_id","league_name","league_short_name",
      "league_year"
    ]
  writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
  writer.writeheader()
  writer.writerows(players)

print("Done.")
print("======================================")
```

---

## Notes

You can read more about the [API internals here](http://api.football-data.org/api_internals) and view the [documentation here](http://api.football-data.org/documentation).