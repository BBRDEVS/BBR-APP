module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          core: './src/core',
          data: './src/core/data',
          domain: './src/core/domain',
          ui: './src/core/ui',
          components: './src/core/ui/components',
          container: './src/core/ui/container',
          pages: './src/core/ui/pages',
        },
      },
    ],
  ],
};
