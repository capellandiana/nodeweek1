const chalk = require('./node_modules/chalk');
const yargs = require('yargs')
const notes = require('./notes.js');
const { describe, argv, demandOption } = require('yargs');
// const command = process.argv[2]

yargs.version('1.1.0')
// console.log(process.argv)

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of the note',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body)
    },

})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'sting'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'listing notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)
// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }


// const message = getNotes()
// console.log(message)

// console.log(chalk.inverse.bold.blue("Success"))
// // const greenMsg = chalk.green('success')
// // console.log(greenMsg)
// console.log(process.argv[2])


// const add = require('./utils.js')
// const sum = add (4, 2)
// console.log(sum)
//control c to stop nodemon