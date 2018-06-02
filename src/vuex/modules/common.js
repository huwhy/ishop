// import axios from './../../axios'
// import qs from 'qs'

const state = {
  footerIndex: 'INDEX',
  footerShow: true
}

const getters = {
  footerIndex: state => state.footerIndex,
  footerShow: state => state.footerShow
}

const actions = {
  changeFooterIndex ({ commit, state }, index) {
    return new Promise(resolve => {
      commit('changeFooterIndex', index)
      resolve()
    })
  },
  changeFooterShow ({ commit, state }, show) {
    commit('changeFooterShow', show)
  }
}

const mutations = {
  changeFooterIndex (state, index) {
    state.footerIndex = index
  },
  changeFooterShow (state, show) {
    state.footerShow = show
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
