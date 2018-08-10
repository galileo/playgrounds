import { defaultFontColor } from './_variables'

export const buttonSize = ({paddingTop, paddingRight = '', paddingBottom = '', paddingLeft = '', color = defaultFontColor} = {}) => ({
    'font-family': 'Verdana',
    'font-size': '10px',
    'color': color,
    'padding': `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`,
})


export const boxShadow = (...shadows) => `
    -mox-box-shadow': ${shadows};
    -webkit-box-shadow: ${shadows};
    box-shadow: ${shadows};
`
