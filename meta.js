module.exports = {
  prompts: [
    {
      type: 'input',
      name: "description",
      message: "项目的描述：",
      default: "A Vue.js project"
    },
    {
      type: 'input',
      name: "keywords",
      message: "项目的关键字：",
      default: "vue"
    },
    {
      type: 'input',
      name: "license",
      message: "项目使用的协议：",
      default: "MIT"
    }
  ]
}
