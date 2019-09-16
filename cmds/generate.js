module.exports = (args) => {
    let cmd = args._[1]

    if(args.component || args.c){
        cmd = 'component'
    }
    switch(cmd){
        case 'component':
            require('../params/component')(args)
            break;
        default:
            console.error(`"${cmd}" is not a valid command!`)
            break
    }
}