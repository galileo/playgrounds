import { defaultFontColor } from './_variables'

export const buttonSize = ({paddingTop, paddingRight = '', paddingBottom = '', paddingLeft = '', color = defaultFontColor}) => `
font-size: 10px;
color: ${color};
padding: ${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft};
font-family: Verdana;
`
