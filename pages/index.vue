<template>
  <div class="container">
    <img src="~/assets/images/kuli1.webp" />
    <nuxt-link to="/about">关于</nuxt-link>
    <nuxt-link to="/user">用户</nuxt-link>
    <nuxt-link to="/user/one">用户-one</nuxt-link>

    <nuxt-link to="/goods">goods</nuxt-link>
    <nuxt-link to="/goods/details">goods details</nuxt-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios.get("http://localhost:3301/in_theaters").then(res => {
      console.log(res);
      callback(null, { list: res.data });
    });
  }
};
</script>
<style scoped lang="scss">
.container {
  margin: 0 auto;
}
</style>
