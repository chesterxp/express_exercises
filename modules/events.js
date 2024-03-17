const EventEmitter = require('events');

const customEmitter = new EventEmitter();

const data = {
    name: 'anet',
    age: 30
}

customEmitter.on('response', (name, age) => {
    console.log(`Data received. User ${name} age: ${age}`);
})

customEmitter.emit('response', 'luki', 30)