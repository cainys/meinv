import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//保存应用启动时的初始状态
const state = {
    'headerTitle': '福利',
    'menus': ['welfare', 'day', 'android', 'ios', 'web'],
    'menuShow': false,
    'loadingShow': false,
    'news': 5
}
//创建一个mutations对象
const mutations = {
    UPDATE_MENUSHOW (state) {
        state.menuShow = !state.menuShow
    }
}
const actions = {
    updateMenuShow ({commit}) {
        commit('UPDATE_MENUSHOW')
    }
}
const getters = {
    getHeaderTitle: state => state.headerTitle
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
