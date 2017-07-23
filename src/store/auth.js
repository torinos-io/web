import Api from '@/services/Api';
import router from '@/router';

export const accessTokenKey = 'accessToken';

// Initial state
export const state = {
  authUrl: '',
  accessToken: '',
};

const actions = {
  // getAuthUrl requests the torinos-io/api server to return the GitHub OAuth URL.
  getAuthUrl: ({ commit }) => {
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
  sendAuthorizationCode: ({ commit }, authorizationCode) => {
    Api.post('oauth/github/authentication', { authorizationCode }).then(
      ({ response }) => {
        if (response) {
          commit('setAccessToken', response.data.githubAccessToken);
        }
      },
      (err) => {
        console.log(err);
      },
    );
  },

  // loadAccessToken retrieves the access token from the localStorage.
  loadAccessToken: ({ commit }) => {
    commit('getAccessTokenFromLocalStorage');
  },

  // clearAccessToken flushes the access token from the localStorage.
  clearAccessToken: ({ commit }) => {
    commit('clearAccessTokenFromLocalStorage');
  },
};

export const mutations = {
  // setAuthUrl sets the GitHub authentication URL to the vuex store.
  setAuthUrl: (state, authUrl) => {
    state.authUrl = authUrl;
  },

  // setAccessToken sets the access token to the store and the localStorage.
  setAccessToken: (state, accessToken) => {
    // Validate the accessToken with length.
    if (accessToken.length > 0) {
      state.accessToken = accessToken;

      // Set accessToken to localStorage.
      localStorage.setItem(accessTokenKey, accessToken);

      // Send the user to root page.
      router.push({ name: 'root' });
    }
  },

  getAccessTokenFromLocalStorage: (state) => {
    const accessToken = localStorage.getItem(accessTokenKey);
    state.accessToken = accessToken;
  },

  clearAccessTokenFromLocalStorage: (state) => {
    state.accessToken = '';
    localStorage.removeItem(accessTokenKey);
  },
};

const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
