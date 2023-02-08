const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes are wack"
}
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
// adding debugger is a tool you can use along side the inspect tools we went to chrome://inspect, inspected the document and we ran the debbuger to see it play, pause at debugger and play again.
// we love using console log to check for errors. Sometimes! most basic tool to debug.
    // console.log(duplicateNote)
    // console.log(title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    } else {
        console.log(chalk.red.inverse('note title taken'))
    }

}
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((notes) => notes.title !== title)

    if (notes.length > notesToKeep) {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No NOte found'))
    }
}
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse.yellow('your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red('note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}
module.exports = {
    getNotes: getNotes,
    addNotes: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}