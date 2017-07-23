import { mutations } from '@/store/user';

describe('store/user', () => {
  describe('mutations', () => {
    let state;

    beforeEach(() => {
      state = {
        user: null,
      };
    });

    it('setCurrentUser', () => {
      const userData = {
        id: 1,
        githubUuid: '1234567',
        userName: 'johndoe',
        email: 'john.doe@example.com',
        githubAccessToken: 'access-token',
      };
      const { setCurrentUser } = mutations;

      expect(state.user).to.be.null;
      setCurrentUser(state, userData);
      expect(state.user).to.not.be.null;
      expect(state.user).to.deep.equal(userData);
    });
  });
});
