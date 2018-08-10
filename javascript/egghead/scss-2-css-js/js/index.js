import styles from './style/main'
// import buttonSizes from './style/_button-sizes'

let counter = 0;

const cssToString = (css) => {
    const classes = {};
    let cssString = '';

    for (const name in css) {
        classes[name] = name + '-' + counter++;
        const selector = '.' + classes[name];
        cssString += selector + ' {';
        for (const property in css[name]) {
            cssString += property + ':' + css[name][property] + ';';
        }
        cssString += '}';
    }

    document.head.appendChild(
        document.createElement('style')
    ).textContent = cssString;

    return classes;
}

const classes = cssToString(styles);

document.body.innerHTML = `<div class="${classes.btn}">Click me!</div>`
