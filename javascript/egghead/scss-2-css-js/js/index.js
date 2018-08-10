import styles from './style/main'
import css from './css'

const classes = css(styles);

document.body.innerHTML = `<div class="${classes.btn} ${classes.btnShadow}">Click me!</div>`
