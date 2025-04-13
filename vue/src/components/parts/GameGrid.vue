<template>
  <div class="grid" :style="gridStyle">
    <GameCell
      v-for="(cell, index) in cells"
      :key="index"
      :cell="cell"
      @click="({ x, y }) => handleCellClick({ x, y })"
      @hover="({ x, y }) => handleCellHover({ x, y })"
      @leave="({ x, y }) => handleCellLeave({ x, y })"
      @delete="({ x, y }) => handleDelete({ x, y })"
    ></GameCell>
  </div>
</template>

<script>
import GameCell from "./GameCell.vue";

import { mapState, mapActions } from "vuex";

export default {
  name: "GameGrid",
  components: {
    GameCell,
  },
  props: {
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      cellMap: new Map(),
      canBuildStatus: true,
      selectedArea: [],
    };
  },
  computed: {
    ...mapState("selection", ["selectedItem"]),
    ...mapState("grid", ["cells", "buildings"]),
    gridStyle() {
      return {
        display: "grid",
        gridTemplateColumns: `repeat(${this.x}, 1fr)`,
        gridTemplateRows: `repeat(${this.y}, 1fr)`,
      };
    },
  },
  mounted() {
    this.initializeGrid({ x: this.x, y: this.y });

    let cellCount = 0;
    for (let i = 0; i < this.x; i++) {
      for (let j = 0; j < this.y; j++) {
        this.cellMap.set(`${i}-${j}`, cellCount);
        cellCount++;
      }
    }
  },
  methods: {
    ...mapActions("grid", ["initializeGrid", "updateCells", "setBuilding"]),

    findCellIndex(x, y) {
      return this.cellMap.get(`${x}-${y}`) ?? -1;
    },
    handleCellHover({ x, y }) {
      this.canBuildStatus = true;

      if (this.selectedItem) {
        const index = this.findCellIndex(x, y);
        const cellArr = [];
        let active = "active_blue";
        for (let i = x + this.selectedItem.occupies[0].x; i <= x + this.selectedItem.occupies[1].x; i++) {
          for (let j = y + this.selectedItem.occupies[0].y; j <= y + this.selectedItem.occupies[1].y; j++) {
            const localIndex = this.findCellIndex(i, j);
            cellArr.push(localIndex);
            if (localIndex === -1 || this.cells[localIndex].isOccupied) {
              active = "active_red";
              this.canBuildStatus = false;
            }
          }
        }
        this.selectedArea = [...cellArr];

        cellArr.forEach((item) => {
          if (item >= 0) {
            this.updateCells({ index: item, updates: { activeClass: active } });
          }
        });
        this.updateCells({ index: index, updates: { temp: this.selectedItem?.component ?? null } });
      }
    },
    handleCellLeave({ x, y }) {
      const index = this.findCellIndex(x, y);
      if (this.selectedItem) {
        for (let i = x + this.selectedItem.occupies[0].x; i <= x + this.selectedItem.occupies[1].x; i++) {
          for (let j = y + this.selectedItem.occupies[0].y; j <= y + this.selectedItem.occupies[1].y; j++) {
            const localIndex = this.findCellIndex(i, j);

            if (localIndex >= 0) {
              this.updateCells({ index: localIndex, updates: { activeClass: null } });
            }
          }
        }
        this.updateCells({ index: index, updates: { temp: null } });
      }
    },
    handleCellClick({ x, y }) {
      if (!(this.selectedItem != null && this.canBuildStatus)) {
        return;
      }
      const index = this.findCellIndex(x, y);
      this.updateCells({ index: index, updates: { children: this.selectedItem.component } });
      this.setBuilding({
        key: `${x}-${y}`,
        building: {
          occupies: this.selectedItem.occupies,
          index: index,
        },
      });

      this.selectedArea.forEach((index) => {
        this.updateCells({ index: index, updates: { isOccupied: true, activeClass: "active_red" } });
      });
    },
    handleDelete({ x, y }) {
      const occupies = this.buildings.get(`${x}-${y}`).occupies;
      const index = this.findCellIndex(x, y);
      this.updateCells({ index: index, updates: { isOccupied: false, children: null } });
      for (let i = x + occupies[0].x; i <= x + occupies[1].x; i++) {
        for (let j = y + occupies[0].y; j <= y + occupies[1].y; j++) {
          const localIndex = this.findCellIndex(i, j);
          this.updateCells({ index: localIndex, updates: { isOccupied: false } });
          //   this.cells[localIndex].activeClass = null;
        }
      }
    },
  },
};
</script>

<style lang="less">
.grid {
  z-index: 1;
  transform: rotateX(45deg) rotateZ(45deg);
  transform-origin: center;
  background: url("../../assets/cat.png") left / 100% 100% no-repeat;
}
</style>
