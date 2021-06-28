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
import { getUser } from "@/api/home.js";
export default {
  //服务端
  middleware() {},
  //服务端
  validate() {
    return true;
  },
  //服务端 nuxtjs进行服务器渲染关键钩子，只支持page目录下的文件，不支持components目录下的组件
  asyncData() {},
  // store数据加载
  fetch() {},
  // 服务端和客户端都会执行
  beforeCreate() {},
  // 服务端和客户端都会执行
  created() {
    getUser().then(res => {
      console.log(res.data);
    });
  },
  // 客户端执行
  beforeMount() {},
  // 客户端执行
  mounted() {}
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
