import { createApp } from "vue";
import { createStore } from "vuex";

const store = createStore({
  state(){
    return {
      characters: [],
      info: {},
      currentPage: 1,
      filterName: ""
    }
  },
  mutations: {
    setState(state, payload){
      state.characters = payload.results;
      state.info = payload.info;
    },
    setCurrentPage(state, payload){
      state.currentPage += payload;
    },
    setFilterName(state, payload){
      state.filterName = payload;
    },
    setCurrentPageInit(state){
      state.currentPage = 1;
    }
  },
});

const app = createApp({});
app.use(store);

export default store;