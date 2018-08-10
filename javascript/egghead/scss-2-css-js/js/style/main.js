import { baseFontSize, buttonPaddingX, buttonPaddingY, backgroundColor, borderRadius, fontColor } from './_variables';
import { buttonSize } from './_mixins';

export default `
.btn {
    ${buttonSize({ color: fontColor, paddingTop: buttonPaddingY, paddingRight: buttonPaddingX })};
    font-size: ${baseFontSize};
    border-radius: ${borderRadius};
    background: ${backgroundColor};
}
`;
