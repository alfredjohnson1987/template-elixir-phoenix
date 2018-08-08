const superb = require('superb')

module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new project?',
      default: ':folderName:'
    },
    description: {
      message: 'How would you describe the new project?',
      default: `My Elixir Phoenix Project`,
    },
  },
  move: {
    '.gitignore': 'gitignore'
  },
  showTip: true,
  gitInit: true,
  installDependencies: false,
}
