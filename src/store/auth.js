import Api from '@/services/Api';

// Initial state
const state = {
  authUrl: '',
};

const actions = {
  loadAuthUrl: ({ commit }) => {
    Api.get('oauth/github/authorization').then(
      ({ response }) => {
        console.log(response);
        commit('setAuthUrl', response.data.url);
      },
      (err) => {
        console.log(err);
      },
    );
  },
};

const mutations = {
  setAuthUrl: (state, authUrl) => {
    state.authUrl = authUrl;
  },
};

const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
