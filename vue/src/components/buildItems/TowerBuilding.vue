<template>
  <div class="building">
    <div class="building__wall building__wall--left"></div>
    <div class="building__wall building__wall--right"></div>
    <div class="building__wall building__wall--back-left"></div>
    <div class="building__wall building__wall--back-right"></div>

    <div :style="{ opacity: 1 }" class="building__ceiling">
      <div class="building__wall building__wall--left"></div>
      <div class="building__wall building__wall--right"></div>
      <div class="building__wall building__wall--back-left"></div>
      <div class="building__wall building__wall--back-right"></div>
      <div class="building__ceiling"></div>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="less">
.building {
  pointer-events: none;
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: brown;
  z-index: 5;
  border: 1px dotted rgb(39, 6, 6);

  &__wall {
    position: absolute;
    border: 1px dotted rgb(39, 6, 6);
    background-color: green;

    &--left {
      width: 40px;
      height: 20px;
      transform-origin: bottom;
      transform: skewX(45deg) translateY(20px) translateX(-20px);
      z-index: 10;
      background: url("../../assets/wall.png") left / cover no-repeat;
    }

    &--right {
      width: 20px;
      height: 20px;
      transform-origin: right;
      transform: skewY(45deg) translateX(20px) translateY(-20px);
      z-index: 10;
      background: url("../../assets/wall_rotated.png") left / 200% 200% no-repeat;
    }

    &--back-left {
      width: 20px;
      height: 40px;
      background-color: rgb(4, 58, 4);
      transform-origin: left;
      transform: skewY(45deg) translateX(-20px) translateY(0px);
      z-index: 5;
      background: url("../../assets/wall_rotated.png") left / cover no-repeat;
    }

    &--back-right {
      width: 40px;
      height: 20px;
      background-color: rgb(4, 58, 4);
      transform-origin: top;
      transform: skewX(45deg) translateX(0px) translateY(-20px);
      z-index: 5;
      background: url("../../assets/wall.png") left / cover no-repeat;
    }
  }

  &__ceiling {
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: black;
    opacity: 0.5;
    transform: translate(-20px, -20px);
    z-index: 11;
  }
}
</style>
