<template>
  <div class="building">
    <div class="building__wall building__wall--left"></div>
    <div class="building__wall building__wall--right"></div>
    <div class="building__wall building__wall--back-left"></div>
    <div class="building__wall building__wall--back-right"></div>
    <div class="building__ceiling"></div>
  </div>
</template>

<script></script>

<style scoped lang="less">
.building {
  pointer-events: none;
  position: relative;
  width: 80px;
  height: 120px;
  background-color: brown;
  transform: translate(-40px, -40px);
  z-index: 5;
  border: 1px dotted rgb(39, 6, 6);

  &__wall {
    position: absolute;
    border: 1px dotted rgb(39, 6, 6);
    background-color: green;

    &--left {
      width: 80px;
      height: 40px;
      transform-origin: bottom;
      transform: skewX(45deg) translateY(80px) translateX(-80px);
      z-index: 10;
      background: url("../../assets/wall.png") left / cover no-repeat;
    }

    &--right {
      width: 40px;
      height: 120px;
      transform-origin: right;
      transform: skewY(45deg) translateX(40px) translateY(-40px);
      z-index: 10;
      background: url("../../assets/DaD.png") center / 100% 100% no-repeat;
    }

    &--back-left {
      width: 40px;
      height: 120px;
      background-color: rgb(4, 58, 4);
      transform-origin: left;
      transform: skewY(45deg) translateX(-40px) translateY(0px);
      z-index: 5;
      background: url("../../assets/wall_rotated.png") left / cover no-repeat;
    }

    &--back-right {
      width: 80px;
      height: 40px;
      background-color: rgb(4, 58, 4);
      transform-origin: top;
      transform: skewX(45deg) translateX(0px) translateY(-40px);
      z-index: 5;
      background: url("../../assets/wall.png") left / cover no-repeat;
    }
  }

  &__ceiling {
    background-color: gray;
    position: absolute;
    width: 80px;
    height: 120px;
    transform: translate(-40px, -40px);
    z-index: 11;
  }
}
</style>
