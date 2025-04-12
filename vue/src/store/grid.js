export default {
  namespaced: true,
  state: () => ({
    cells: [],
    buildings: new Map(),
  }),
  mutations: {
    SET_CELLS: (state, cells) => {
      state.cells = cells;
    },
    UPDATE_CELLS: (state, { index, updates }) => {
      Object.assign(state.cells[index], updates);
    },
    SET_BUILDING: (state, { key, building }) => {
      state.buildings.set(key, building);
    },
    DELETE_BUILDING: (state, { x, y }) => {
      const key = `${x}-${y}`;
      state.buildings.delete(key);
    },
    RESET_GRID: (state) => {
      state.cells = [];
      state.buildings.clear();
    },
  },
  actions: {
    setCells: ({ commit }, cells) => {
      commit("SET_CELLS", cells);
    },
    updateCells: ({ commit }, payload) => {
      commit("UPDATE_CELLS", payload);
    },
    setBuilding: ({ commit }, payload) => {
      commit("SET_BUILDING", payload);
    },
    deleteBuilding: ({ commit }, payload) => {
      commit("DELETE_BUILDING", payload);
    },
    resetGrid: ({ commit }) => {
      commit("RESET_GRID");
    },
    initializeGrid: ({ commit }, { x, y }) => {
      const cells = [];
      for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
          cells.push({
            x: i,
            y: j,
            isOccupied: false,
            activeClass: null,
            children: null,
            temp: null,
          });
        }
      }
      commit("SET_CELLS", cells);
    },
  },
};
