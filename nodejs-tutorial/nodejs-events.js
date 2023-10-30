// Demonosrating an event when a file open
const fs = require('fs');
const rs = fs.createReadStream('./demoFile1.html');
rs.on('open', ()=>{
    console.log("File is open.");
})



// Demonostrating a custom event handler on custom event SCREAM
const events = require('events');
const evntEmitter = new events.EventEmitter();

//Custom event handler
const myEventHandler = () => {
    console.log("I heard a scream...");
}

//Assigning the event handler to the event object
evntEmitter.on('scream', myEventHandler);

//Fire the event
evntEmitter.emit('scream');

