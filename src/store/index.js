import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarOpen: false,
    session: "",
    sessionid: "",
    sessionrole: "",
    ledgerid: "",
    itemid: "",
    price: "",
    prrequestid: "",
    dateofnow: "",
  },
  getters: {
    sideBarOpen: (state) => {
      return state.sideBarOpen;
    },
  },
  mutations: {
    toggleSidebar(state) {
      state.sideBarOpen = !state.sideBarOpen;
    },
  },
  actions: {
    toggleSidebar(context) {
      context.commit("toggleSidebar");
    },
  },
  modules: {},
});
