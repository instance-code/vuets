module.exports = {
  plugins: ["@typescript-eslint"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".vue"],
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
    "@vue/standard"
  ],

  overrides: [
    {
      files: ["*.html"],
      rules: {
        "vue/comment-directive": "off",
        "no-unused-vars": "off"
      }
    }
  ],

  rules: {
    semi: "off",
    "comma-dangle": "off",
    "no-unused-vars": [0],
    "vue/no-unused-vars": "warn",
    "no-mixed-spaces-and-tabs": "off",
    quotes: "off",
    "vue/html-indent": [
      2,
      2,
      {
        attribute: 1,
        closeBracket: 0
      }
    ],
    "vue/max-attributes-per-line": [
      0,
      {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    "vue/require-v-for-key": "off",
    "vue/multiline-html-element-content-newline": [
      "off",
      {
        ignoreWhenEmpty: true,
        ignores: ["pre", "textarea"],
        allowEmptyLines: false
      }
    ],
    "vue/html-self-closing": [
      0,
      {
        html: {
          void: "always",
          normal: "never",
          component: "always"
        },
        svg: "always",
        math: "always"
      }
    ],
    "vue/singleline-html-element-content-newline": [
      0,
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ["pre", "textarea", "option"]
      }
    ],
    "vue/multi-word-component-names": [0]
  }
}
