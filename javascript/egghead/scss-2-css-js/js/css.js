
let counter = 0;

export default css => {
    const classes = {};
    let cssString = '';

    for (const name in css) {
        classes[name] = name + '-' + counter++;
        const selector = '.' + classes[name];
        cssString += selector + ' {';
        if (typeof css[name] === 'string') {
            cssString += css[name];
        } else {
            for (const property in css[name]) {
                cssString += property + ':' + css[name][property] + ';';
            }    
        }
        
        cssString += '}';
    }

    document.head.appendChild(
        document.createElement('style')
    ).textContent = cssString;

    return classes;
}
