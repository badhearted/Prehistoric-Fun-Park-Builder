<template>
  <div class="bottom">
    <img src="../../assets/town-hall.png" class="town-hall" alt="" />
  </div>
</template>

<script></script>

<style scoped lang="less">
.bottom {
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: inherit;
  transform: translate(-40px, -40px);
  z-index: 5;
}

.town-hall {
  position: absolute;
  width: 90px;
  transform: rotateZ(-45deg) rotateX(-45deg) scaleY(2) translateY(-7px);
}
</style>
