module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential", //Vue.js 官方提供的 ESLint 插件配置，用于检查 Vue.js 项目的代码质量
    "plugin:prettier/recommended", // ESLint 的一个配置扩展,启用 Prettier 规则
  ],
  plugins: ["vue", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  // rules: {
  //   quotes: 2, //0 忽略 1警告 2错误
  //   semi: 1,
  //   "no-console": 1,  //禁止在代码中是使用console.log()
  // },
  rules: {
    "prettier/prettier": "error", // 将 Prettier 格式问题视为 ESLint 错误
  },
}
