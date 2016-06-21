---
title: An API for Soccer Data
date: 2016-06-20 20:16:00
---

A few days ago, I was looking for a way to get soccer data without having to do too much heavy lifting, and stumbled upon this delightful API: [football-data.org](http://football-data.org). It's not fancy, but it works well.

Right now you have to request everything (seasons, leagues, teams, players, and fixtures) by id, which is kind of painful. Although, once you find an id, you are off running.

Here's a quick Python script to get all the English Premier League 2015-2016 players and store them in a `.csv`. (Alternatively, download all 527 players [here](/blog/assets/2016/3/players.csv).)

```python
import csv
from enum import Enum
import re
import requests

class FootballDataApi(object):
  url = "http://api.football-data.org/v1/"

  def __init__(self, key):
    self.key = key

  class Endpoint(Enum):
    teams = "soccerseasons/{}/teams"
    players = "teams/{}/players"

  def getRequest(self, endpoint):
    headers = {
      "X-Auth-Token": self.key,
      "X-Response-Control": "minified"
    }
    r = requests.request("GET", url=self.url + endpoint, headers=headers)
    print("GET {}".format(self.url + endpoint))
    json = r.json()
    return json

  def getTeams(self, season_id):
    teams = self.getRequest(self.Endpoint.teams.value.format(season_id))
    return teams["teams"]

  def getPlayers(self, team_id):
    players = self.getRequest(self.Endpoint.players.value.format(team_id))
    return players["players"]

# API Set up
key = "YOUR API KEY HERE"
api = FootballDataApi(key)

# Teams
epl_2015_id = 398
teams = api.getTeams(epl_2015_id)
print("Got {} teams.\n".format(len(teams)))

# Players
players = []
for team in teams:
  tplayers = api.getPlayers(team["id"])
  for tp in tplayers:
    market_value = tp["marketValue"]
    if market_value is not None:
      market_value = re.sub("[^\d\.]", "", market_value)

    player = {
      "id": tp["id"],
      "name": tp["name"],
      "nationality": tp["nationality"],
      "position": tp["position"],
      "birth_date": tp["dateOfBirth"],
      "market_value": market_value,
      "team_id": team["id"],
      "team_name": team["name"],
      "team_short_name": team["shortName"]
    }
    players.append(player)

print("Got {} players.\n".format(len(players)))

filename = "players.csv" 
with open(filename, "w") as csvfile:
  print("Writing `players` to `{}`...".format(filename))
  fieldnames = [
    "id", "name", "nationality", "position", "birth_date",
    "market_value", "team_id", "team_name", "team_short_name"
    ]
  writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
  writer.writeheader()
  writer.writerows(players)
  print("Done.")
```

---

## Notes

You can read more about the [API internals here](http://api.football-data.org/api_internals) and view the [documentation here](http://api.football-data.org/documentation).