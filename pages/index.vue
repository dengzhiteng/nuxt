<template>
  <div class="container">
    <img src="~/assets/images/kuli1.webp" />
    <nuxt-link to="/about">关于</nuxt-link>
    <nuxt-link to="/user">用户</nuxt-link>
    <nuxt-link to="/user/one">用户-one</nuxt-link>

    <nuxt-link to="/goods">goods</nuxt-link>
    <nuxt-link to="/goods/details">goods details</nuxt-link>
    <p>
      他问我
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios.get("/user").then(res => {
      console.log(res.data);
    });
  }
};
</script>
<style scoped lang="less">
.container {
  margin: 0 auto;
  p {
    color: red;
  }
}
</style>
