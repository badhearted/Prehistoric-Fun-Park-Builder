export default {
  namespaced: true,
  state: () => ({
    selectedItem: null,
  }),
  getters: {
    selectedItem: (state) => state.selectedItem,
  },
  mutations: {
    SET_SELECTED_ITEM: (state, item) => {
      state.selectedItem = item;
    },
    CLEAR_SELECTION: (state) => {
      state.selectedItem = null;
    },
  },
  actions: {
    setSelectedItem: ({ commit }, item) => {
      commit("SET_SELECTED_ITEM", item);
    },
    clearSelection: ({ commit }) => {
      commit("CLEAR_SELECTION");
    },
  },
};
