const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function () {
        console.log('Removing a new note!');
    }
});

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
        console.log('Listing notes!');
    }
});

yargs.command({
    command: 'read',
    describe: 'Read notes',
    handler: function () {
        console.log('Reading notes!');
    }
});

yargs.parse()