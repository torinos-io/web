import { accessTokenKey, mutations } from '@/store/auth';

describe('store/auth', () => {
  describe('mutations', () => {
    const accessToken = 'access-token';
    let state;

    beforeEach(() => {
      state = {
        authUrl: '',
        accessToken: '',
      };
    });

    it('setAuthUrl', () => {
      const authUrl = 'http://example.com';
      const { setAuthUrl } = mutations;

      expect(state.authUrl).to.be.empty;
      setAuthUrl(state, authUrl);
      expect(state.authUrl).to.equal(authUrl);
    });

    it('setAccessToken', () => {
      const { setAccessToken } = mutations;

      expect(state.accessToken).to.be.empty;
      setAccessToken(state, accessToken);
      expect(state.accessToken).to.equal(accessToken);
    });

    describe('with localStorage', () => {
      beforeEach(() => {
        localStorage.setItem(accessTokenKey, accessToken);
      });

      it('getAccessTokenFromLocalStorage', () => {
        const { getAccessTokenFromLocalStorage } = mutations;

        expect(localStorage.getItem(accessTokenKey)).to.equal(accessToken);
        expect(state.accessToken).to.be.empty;
        getAccessTokenFromLocalStorage(state);
        expect(state.accessToken).to.equal(accessToken);
      });

      it('clearAccessTokenFromLocalStorage', () => {
        const { setAccessToken, clearAccessTokenFromLocalStorage } = mutations;
        // To prepare the access token for test.
        setAccessToken(state, accessToken);

        expect(state.accessToken).to.equal(accessToken);
        clearAccessTokenFromLocalStorage(state);
        expect(state.accessToken).to.be.empty;
        expect(localStorage.getItem(accessTokenKey)).to.be.null;
      });
    });
  });
});
