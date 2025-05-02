<template>
  <div class="bottom">
    <img src="../../assets/server.png" class="server" alt="" />
  </div>
</template>

<script></script>

<style scoped lang="less">
.bottom {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: inherit;
  z-index: 5;
}
.server {
  position: absolute;
  width: 66px;
  transform: rotateZ(-45deg) rotateX(-45deg) scaleY(2) translateY(-32px);
}
</style>
