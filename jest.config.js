module.exports = {
  preset: "@vue/cli-plugin-unit-jest", // Jest 测试框架在 Vue 项目中使用的预设配置。
  transform: {
    "^.+\\.vue $ ": "vue-jest",
    "^.+\\js $ ": "babel-jest",
  },
  //用于指定需要收集测试覆盖率的文件模式
  //**/：匹配任意层级的子目录。
  //*.{js,vue}：匹配所有以 .js 或 .vue 为扩展名的文件
  collectCoverageFrom: [
    "src/**/*.{js,vue}", //配置src 下的 JavaScript 和 vue 文件
    "!src/router/*.{js,vue}", //配置src 下的 JavaScript 和 vue 文件
    "**/*.{js,vue}", // 匹配所有 JavaScript 和 vue 文件
    "!**/node_modules/**", // 排除 node_modules 目录
    "!**/vendor/**", // 排除 vendor 目录
    "!**/*.test.{js,jsx}", // 排除测试文件
  ],
  coverageReporters: ["json", "lcov", "text", "clover"], //用于指定生成测试覆盖率报告的格式
  //用于指定 Jest 应该匹配哪些文件作为测试文件
  testMatch: [
    "**/__tests__/**/*.spec.{j,t}s?(x)", //// 匹配 __tests__ 目录下的测试文件
    "**/*.{j,t}s?(x)?(.spec|.test)", /// 匹配以 spec 或 test 命名的测试文件
  ],
  //指定测试结果的报告方式
  reporters: [
    "default", //这是默认的终端报告器，它会在控制台中显示测试结果。
    // [
    //   "jest-junit", //生成 JUnit XML 格式的报告，适用于持续集成系统
    //   {
    //     outputDirectory:
    //       "D:/sonor/sonar-scanner-7.2.0.5079-windows-x64/conf/coverage", // XML 文件输出目录
    //     outputName: "jest-sonar-report.xml", // XML 文件名
    //   },
    // ],
  ],
}
