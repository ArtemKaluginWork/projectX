import Color from 'color';
import i18n from 'i18next';
import { StyleSheet } from 'react-native';
import { Colors, THEMES } from 'constants';

export function changeLanguage(lng) {
  if (i18n.language !== lng) i18n.changeLanguage(lng);
}

export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function getLightRandomColor() {
  let isLight = false;
  let color = null;
  while (!isLight) {
    color = Color(getRandomColor());
    isLight = color.isLight();
  }
  return color.hex();
}

export function getDarkRandomColor() {
  let isDark = false;
  let color = null;
  while (!isDark) {
    color = Color(getRandomColor());
    isDark = color.isLight();
  }
  return color.hex();
}

export function transparentize(color, opacity = 0.5) {
  return Color(color).alpha(opacity);
}

export function createThemes(styles) {
  return THEMES.reduce((acc, themeName) => {
    Object.assign(acc, { [themeName]: StyleSheet.create(styles(Colors[themeName])) });
    return acc;
  }, {});
}
