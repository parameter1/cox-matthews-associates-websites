module.exports = {
  extends: 'airbnb-base',
  plugins: [
    'import'
  ],
  rules: {
    'import/extensions': [
      {
        marko: 'never',
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.marko'],
      },
    },
  },
};
