import Color from 'color';

const black = '#222222';
const white = '#ffffff';
const primaryDefault = '#aa214f';
const secondaryDefault = '#f9d18c';
const offBlack = '#111111';

function getColorsSet({
                        primary = primaryDefault,
                        secondary = secondaryDefault,
                        saturation = 0,
                        lightness = 0,
                        opacity = 0,
                        gradient = [primary, secondary],
                      } = {}) {
  return ({
    primary,
    secondary,
    primaryBright: Color(primary).saturate(1),
    secondaryBright: Color(secondary).saturate(1),
    gradient,
    black,
    white,
    offWhite: Color(white).darken(1),
    quarterTransparent: color => Color(color).alpha(0.75),
    semiTransparent: color => Color(color).alpha(0.5),
    threeQuarterTransparent: color => Color(color).alpha(0.25),
    transparent: 'transparent',
    primaryCoalGrey: Color(offBlack).lighten(4).hex(), // lightness 26%
    primaryDarkGrey: Color(offBlack).lighten(6).hex(), // lightness 40%
    primaryGrey: Color(offBlack).lighten(8).hex(), // lightness 66%
    primaryLightGrey: Color(offBlack).lighten(11).hex(), // lightness  80%
    //
    mix: (color1, color2, weight = 0.5) => Color(color1).mix(Color(color2), weight),
  });
}

const defaultTheme = getColorsSet();
const swedish = getColorsSet({ primary: '#0077ee', secondary: '#ffee00' });
const royal = getColorsSet({ primary: '#4169E1', secondary: '#AB3472', gradient: ['#4169E1', '#AB3472', '#6B3FA0'] });
const lagoon = getColorsSet({ primary: '#7DC8F7', secondary: '#9DE5FF' });
const dracula = getColorsSet({ primary: '#44475a', secondary: '#ff5555' });
const alucard = getColorsSet({ primary: '#bbb8a5', secondary: '#00aaaa' });
const mercury = getColorsSet({ primary: '#E5E5E5', secondary: '#C0C0C0' });
const ninja = getColorsSet({ primary: '#1F120F', secondary: '#001B1C' });
const pride = getColorsSet({
  primary: '#ff0000',
  secondary: '#00f',
  gradient: [
    '#ff0000',
    '#ffaa00',
    '#ff0',
    '#0a0',
    '#00f',
    '#a0f',
  ],
});

export default {
  defaultTheme,
  swedish,
  dracula,
  alucard,
  mercury,
  ninja,
  lagoon,
  royal,
  pride,
};
