const menus = {
    main: `
      cs [command] <options>
  
      new ................... generate a new project
      generate .............. generate a new struct
      version ............... show package version
      help .................. show help menu for a command`,
    new: `
        cs new <name> <options>
        --description .... description for project
        --author ......... author for project
    `,    
    generate: `
      cs generate <options>
      component .............. the name of component`,
  }
  
  module.exports = (args) => {
    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]
  
    console.log(menus[subCmd] || menus.main)
  }