<template>
  <PageLayout>
    <section>
      <GameGrid :x="20" :y="20" />
    </section>
    <BuildMenu />
  </PageLayout>
</template>

<script>
import PageLayout from "../parts/PageLayout";
import GameGrid from "../parts/GameGrid.vue";
import BuildMenu from "../parts/BuildMenu.vue";

import { mapState } from "vuex";

export default {
  name: "HomePage",

  components: {
    PageLayout,
    GameGrid,
    BuildMenu,
  },
  computed: {
    ...mapState("selection", ["selectedItem"]),
  },
};
</script>

<style></style>
