import {Colors, Fonts} from '../Themes';
import Scale from '../Transform/Scale';

export function getTopBarStyle(text, color) {
  return {
    fontFamily: Fonts.type.bold,
    fontSize: Scale(14),
    color,
    text
  };
}

export function getTopBarBlueStyle(text, color, bgColor, hideBackButton) {
  return {
    title: getTopBarStyle(text, color, bgColor),
    background: {
      color: bgColor
    },
    backButton: {
      color,
      visible: !hideBackButton,
      showTitle: false
    }
  };
}

export function hideBottomTabs() {
  return {
    visible: false,
    noBorder: true
  };
}

export function statusBarTranslucent(barStyle) {
  return {
    visible: true, // Optional
    style: barStyle || 'light', // Optional ('light', 'dark')
    backgroundColor: 'transparent', // Optional, Android only
    drawBehind: true, // Optional, Android only
    translucent: true, // Optional, Android only
    animated: true, // Optional, IOs only
    hideWithTopBar: false, // Optional, IOs only
    blur: true // Optional, IOs only
  };
}

export function statusBarStyle(bgColor = Colors.white, barStyle = 'light') {
  return {
    visible: true, // Optional
    style: barStyle, // Optional ('light', 'dark')
    backgroundColor: bgColor, // Optional, Android only
    drawBehind: false, // Optional, Android only
    translucent: false, // Optional, Android only
    animated: true, // Optional, IOs only
    hideWithTopBar: false, // Optional, IOs only
    blur: true // Optional, IOs only
  };
}
