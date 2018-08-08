const superb = require('superb')

module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new project?',
      default: ':folderName:'
    },
  },
  move: {
    '.gitignore': 'gitignore'
  },
  showTip: true,
  gitInit: true,
  installDependencies: false,
  // post({ answers, folderPath, log, chalk }, stream) {
  //   const path = answers.name
  //   exec(
  //     `cd ${path} && docker-compose build web && docker-compose run --rm web mix phx.new ${path}/`,
  //     (err, stdout, stderr) => {
  //       if (err) {
  //         log.error(err.message)
  //         process.exit(1)
  //       }
  //       if (stderr) {
  //         log.error(stderr)
  //         process.exit(1)
  //       }
  //       // tips
  //       log.success('Done, let the hacking begin!')
  //       log.info(
  //         `Type ${chalk.magenta(
  //           'cd /' + answers.name
  //         )} to get started!`
  //       )
  //     }
  //   )
  // }
}
