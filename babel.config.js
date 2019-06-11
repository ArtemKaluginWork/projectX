module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./'],
      alias: {
        '@': './',
        actions: './src/redux/actions',
        assets: './src/assets',
        components: './src/components/',
        constants: './src/constants/',
        reducers: './src/redux/reducers/',
        screens: './src/screens/',
        styles: './src/styles/',
        utils: './src/utils/',
      },
    }],
  ],
};
