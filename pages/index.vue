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
export default {};
</script>

<style scoped>
.container {
  margin: 0 auto;
}
</style>
