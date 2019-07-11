const state = {
  token: '1234556',
  name: '',
  avatar: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return true
  },

  // get user info
  getInfo({ commit, state }) {
    return true
  },

  // user logout
  logout({ commit, state }) {
    return true
  },

  // remove token
  resetToken({ commit }) {
    return true
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

