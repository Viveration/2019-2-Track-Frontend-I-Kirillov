// Configuration for StyleLint
// See: https://stylelint.io/user-guide/configuration/

module.exports = {
  extends: ['@wemake-services/stylelint-config-scss', 'stylelint-config-css-modules', 'stylelint-a11y/recommended'],
  plugins: ['stylelint-no-unsupported-browser-features', 'stylelint-a11y'],

  rules: {
    // ignore special `var-` css variables for `:export`
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['/^var-/'],
      },
    ],

    // custom plugins to work with
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
        ignore: ['flexbox'],
      },
    ],
    'plugin/no-low-performance-animation-properties': false,
    'color-format/format': false,
    'color-hex-case': false,
    'color-hex-length': false,
    'plugin/stylelint-no-indistinguishable-colors': false,
    'font-family-no-missing-generic-family-keyword': false,
    // a11y
    'a11y/content-property-no-static-value': true,

    'scale-unlimited/declaration-strict-value': ['/color/', 'fill', 'stroke'],
  },
}
