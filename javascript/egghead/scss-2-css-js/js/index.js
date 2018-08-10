import styles from './style/main'
// import buttonSizes from './style/_button-sizes'

const cssToString = (css) => {
    let result = '';

    for (const selector in css) {
        result += selector + ' {';
        for (const property in css[selector]) {
            result += property + ':' + css[selector][property] + ';';
        }
        result += '}';
    }

    return result;
}

document.head.appendChild(
    document.createElement('style')
).textContent = cssToString(styles);
