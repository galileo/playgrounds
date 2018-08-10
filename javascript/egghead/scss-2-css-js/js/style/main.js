import { baseFontSize, buttonPaddingX, buttonPaddingY, backgroundColor, borderRadius, fontColor } from './_variables';
import { buttonSize, boxShadow } from './_mixins';

export default {
    btn: {
        ...buttonSize({ color: fontColor, paddingTop: buttonPaddingY, paddingRight: buttonPaddingX }),
        'font-size': baseFontSize,
        'border-radius': borderRadius,
        'background': backgroundColor
    },
    btnShadow: boxShadow('0px 4px 5px #666', '2px 6px 10px #999')
};
