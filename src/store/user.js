import Api from '@/services/Api';

// Initial state
// user obejct is such as below.
// user: {
//   id: 1,
//   githubUuid: '1234567',
//   userName: 'johndoe',
//   email: 'john.doe@example.com',
//   githubAccessToken: 'xxx',
// }
const state = {
  user: null,
};

const actions = {
  // getCurrentUser requests the current user data.
  getCurrentUser: ({ commit }, accessToken) => {
    Api.get('user', { headers: { Authorization: `Bearer ${accessToken}` } }).then(
      ({ response }) => {
        commit('setCurrentUser', response.data);
      },
      (err) => {
        console.log(err);
      },
    );
  },
};

export const mutations = {
  // setCurrentUser sets the user object to store.
  setCurrentUser: (state, user) => {
    state.user = user;
  },
};

const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
