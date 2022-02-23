export const state = () => ({
  loggedIn: false,
  showLoginForm: false,
  showUserSettings: false,
})

export const mutations = {
  setUserLogin(state, status) {
    state.loggedIn = status
  },
  setLoginForm(state, status) {
    state.showLoginForm = status;
  },
  setUserSettings(state, status) {
    state.showUserSettings = status;
  },
}
