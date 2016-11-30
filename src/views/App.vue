<template>
<div class="container">
  <router-view keep-alive transition transition-mode="out-in"></router-view>
</div>
</template>


<script>
export default {
  attached() {
  }
}

</script>


<style scoped>
.container {
  font-size: 16px;
  font-family: Microsoft YaHei, Arial, Verdana, Helvetica, AppleGothic, sans-serif;
  color: #333;
}

</style>
