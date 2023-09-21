const plugins = [
  [
    'module-resolver',
    {
      root: ['./'],
      alias: {
        '@src': './src',
      },
    },
  ],
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins,
};
