module.exports = {
  prompts: [
    {
      type: 'input',
      name: "description",
      message: "Project description",
      default: "A Vue.js project"
    },
    {
      type: 'input',
      name: "keywords",
      message: "Project keywords",
      default: "vue"
    },
    {
      type: 'input',
      name: "license",
      message: "License",
      default: "MIT"
    }
  ]
}
