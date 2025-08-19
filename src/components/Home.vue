<template>
  <div>
    <h1>首页</h1>
    <!-- <router-link to="/about">去关于页面</router-link> -->
    <button @click="goToAbout">去关于页面 (编程式)</button>
    <button @click="goToHello">去HelloWorld页面(编程式)</button>
  </div>
</template>

<script>
export default {
  name: "Home-name",
  methods: {
    goToAbout() {
      console.log("页面跳转About")
      this.$router.push({ name: "About" })
    },
    goToHello() {
      console.log("页面跳转goToHello")
      this.$router.push({ name: "HelloWorld" })
    },
  },
}
</script>
