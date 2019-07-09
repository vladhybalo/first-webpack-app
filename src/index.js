import printMe from './print.js';
import './styles.css'
import './base.sass'

// file: src/entry.js
// var tpl = require('./template.njk');
// var html = tpl.render({ message: 'Foo that!' });

function component() {
    const btn = document.createElement('button');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    return btn;
}

document.body.appendChild(component());