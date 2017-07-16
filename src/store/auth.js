import Api from '@/services/Api';

// Initial state
const state = {
  authUrl: '',
  accessToken: '',
};

const actions = {
  // loadAuthUrl requests the torinos-io/api server to return the GitHub OAuth URL.
  loadAuthUrl: ({ commit }) => {
    Api.get('oauth/github/authorization').then(
      ({ response }) => {
        commit('setAuthUrl', response.data.url);
      },
      (err) => {
        console.log(err);
      },
    );
  },

  // sendAuthorizationCode posts the temporary code parameter to authorize.
  sendAuthorizationCode: ({ commit }, { code }) => {
    Api.post('oauth/github/authentication', { authorizationCode: code }).then(
      ({ response }) => {
        commit('setAccessToken', response.data.githubAccessToken);
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

  setAccessToken: (state, accessToken) => {
    // Validate the accessToken with length.
    if (accessToken.length > 0) {
      state.accessToken = accessToken;

      // Set accessToken to localStorage.
      localStorage.setItem('accessToken', accessToken);
    }
  },
};

const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
