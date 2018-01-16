import Vuex from 'vuex';

const SET_POSTS = 'SET_POSTS';
const SET_ACTIVE_POST = 'SET_ACTIVE_POST';

const store = () => new Vuex.Store({
  state: {
    activePost: null,
    author: {
      name: 'Tom Meagher',
      social: {
        github: 'tmm',
        medium: 'tfm',
        twitter: 'tomfme',
      },
      email: 'tom@meagher.co',
    },
    links: [],
    posts: [],
  },
  actions: {
    nuxtServerInit() {
      if (process.server) {
        /* eslint-disable global-require */
        const fs = require('fs');
        const fm = require('front-matter');
        const POSTS_DIR = 'blog';
        const files = fs.readdirSync(POSTS_DIR);
        const posts = files.map((file) => {
          const post = fm(fs.readFileSync(`${POSTS_DIR}/${file}`, 'utf8'));
          const { attributes, body, frontmatter } = post;
          const { title, date } = attributes;
          const slugRegex = /^(\d+)-(\d+)-(\d+)-(.*)(?:\.md)$/g;
          const match = slugRegex
            .exec(file)
            .slice(1, 5);
          const postPath = match.join('/');
          const url = `/blog/${postPath}/`;
          const slug = match.join('-');
          return {
            body,
            date,
            frontmatter,
            slug,
            title,
            url,
          };
        });
        this.dispatch('loadPosts', posts);
      }
    },
    loadPosts({ commit }, posts) {
      const sortedPosts = posts.sort((a, b) => b.date - a.date);
      commit(SET_POSTS, sortedPosts);
    },
    loadPost({ commit }, slug) {
      const activePost = this.state.posts.find(post => post.slug === slug);
      if (activePost) {
        commit('SET_ACTIVE_POST', activePost);
      }
    },
  },
  mutations: {
    [SET_POSTS](state, posts) {
      state.posts = posts;
    },
    [SET_ACTIVE_POST](state, activePost) {
      state.activePost = activePost;
    },
  },
  getters: {
    activePost: state => state.activePost,
    author: state => state.author,
    links: state => [
      {
        name: 'Email',
        username: state.author.email,
        href: `mailto:${state.author.email}?subject=Hi there!`,
      },
      {
        name: 'GitHub',
        username: state.author.social.github,
        href: `https://github.com/${state.author.social.github}`,
      },
      {
        name: 'Medium',
        username: state.author.social.medium,
        href: `https://medium.com/@${state.author.social.medium}`,
      },
      {
        name: 'Twitter',
        username: state.author.social.twitter,
        href: `https://twitter.com/${state.author.social.twitter}`,
      },
    ],
    posts: state => state.posts,
  },
});

export default store;
