<template>
  <div>
    <h1>关于页面</h1>
    <!-- <router-link to="/">回首页</router-link> -->
    <button @click="goToHome">回首页 (编程式)</button>
    <div class="plus-test">
      <input type="number" v-model="firstInputValue" class="first-input" />
      <input type="number" v-model="secondInputValue" class="second-input" />
      <div @click="plusFunction" class="equal">=</div>
      <input type="number" v-model="plustValue" class="second-input" disabled />
    </div>
    <button style="margin-top: 20px" @click="printFruits">打印水果</button>
    <div>{{ showFruit }}</div>
    <div class="css-scan">css扫描</div>
  </div>
</template>

<script>
export default {
  name: "About-name",
  data: function () {
    return {
      firstInputValue: "",
      secondInputValue: "",
      plustValue: "",
      printArray: ["banana", "apple", "pear", "watermelon"],
      showFruit: "",
    }
  },
  methods: {
    goToHome() {
      let a = 4
      console.log("页面跳转About", a)
      this.$router.push({ name: "Home" })
    },
    // 加法函数
    plusFunction() {
      this.$nextTick(() => {
        console.log("结果为", this.firstInputValue, this.secondInputValue)
        this.plustValue = this.firstInputValue + this.secondInputValue
      })
    },
    printFruits() {
      for (let index = 0; index < this.printArray.length; index++) {
        console.log("水果为", this.printArray[index])
        setTimeout(() => {
          this.showFruit = this.printArray[index]
        }, 2000)
      }
    },
    printFruits1() {
      for (let index = 0; index < this.printArray.length; index++) {
        console.log("水果为", this.printArray[index])
        setTimeout(() => {
          this.showFruit = this.printArray[index]
        }, 2000)
      }
    },
    printFruits2() {
      for (let index = 0; index < this.printArray.length; index++) {
        console.log("水果为", this.printArray[index])
        setTimeout(() => {
          this.showFruit = this.printArray[index]
        }, 2000)
      }
    },
    printFruits3() {
      for (let index = 0; index < this.printArray.length; index++) {
        console.log("水果为", this.printArray[index])
        setTimeout(() => {
          this.showFruit = this.printArray[index]
        }, 2000)
      }
      let a = 3
      let b = 4
      let c = 4
      if (a === b) {
        this.printFruits2()
      } else if (a === c) {
        this.printFruits2()
      }
    },
  },
}
</script>
<style lang="scss">
.plus-test {
  margin-top: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
  .first-input {
    display: block;
  }
  .second-input {
    margin-top: 10px;
    display: block;
  }
  .equal {
    height: 50px;
    line-height: 50px;
  }
}
.css-scan {
  color: #3cb371ac;
}
</style>
