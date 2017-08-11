module.exports = {
  "root": true,
  "rules": {
    // - Possible errors
    "for-direction": 2,
    "getter-return": 2,
    "no-cond-assign": 2,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-compare-neg-zero": 0,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": [2, "functions"],
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-obj-calls": 2,
    "no-prototype-builtins": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-template-curly-in-string": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "use-isnan": 2,
    "valid-jsdoc": [
        2, {
            "prefer": {
                "return": "returns"
            },
            "requireParamDescription": false,
            "requireReturn": false,
            "requireReturnDescription": false
        }
    ],
    "valid-typeof": 2,

    // - Best practises
    "accessor-pairs": 2,
    "block-scoped-var": 2,
    "complexity": [2, 5],
    "curly": 2,
    "default-case": 2,
    "dot-location": [2, "property"],
    "dot-notation": 2,
    "eqeqeq": 2,
    "guard-for-in": 2,
    "no-alert": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-div-regex": 2,
    "no-else-return": 2,
    "no-empty-function": 2,
    "no-empty-pattern": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-label": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-global-assign": 2,
    "no-implicit-coercion": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-new": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-return-await": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unused-expressions": 2,
    "no-unused-labels": 2,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-escape": 2,
    "no-void": 2,
    "no-warning-comments": 2,
    "no-with": 2,
    "prefer-promise-reject-errors": ["error", {"allowEmptyReject": true}],
    "radix": 2,
    "require-await": 2,
    "wrap-iife": 2,
    "yoda": 2,

    // - Variables
    "init-declarations": 2,
    "no-catch-shadow": 2,
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-shadow-restricted-names": 2,
    "no-shadow": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-undefined": 2,
    "no-unused-vars": 2,
    "no-use-before-define": [2, "nofunc"],

    // - Style
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "camelcase": 2,
    "capitalized-comments": 2,
    "comma-dangle": 2,
    "comma-spacing": 2,
    "comma-style": 2,
    "computed-property-spacing": 2,
    "eol-last": 2,
    "func-call-spacing": 2,
    "jsx-quotes": 2,
    "indent": [2, 4, { "SwitchCase": 1 }],
    "key-spacing": 2,
    "keyword-spacing": 2,
    "linebreak-style": [2, "unix"],
    "lines-around-comment": 2,
    "max-depth": [2, 2],
    "max-len": [2, 100],
    "max-nested-callbacks": [2, 3],
    "max-params": [2, 3],
    "max-statements": [2, 10],
    "max-statements-per-line": 2,
    "new-cap": 2,
    "new-parens": 2,
    "newline-per-chained-call": 2,
    "no-array-constructor": 2,
    "no-bitwise": 2,
    "no-lonely-if": 2,
    "no-mixed-operators": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-assign": 2,
    "no-multiple-empty-lines": 2,
    "no-negated-condition": 2,
    "no-new-object": 2,
    "no-plusplus": 2,
    "no-tabs": 2,
    "no-nested-ternary": 2,
    "no-trailing-spaces": 2,
    "no-unneeded-ternary": 2,
    "no-whitespace-before-property": 2,
    "object-curly-spacing": [2, "always"],
    "one-var-declaration-per-line": 2,
    "one-var": [2, "never"],
    "padding-line-between-statements": [
      2,
      { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
      { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]},
      { blankLine: "always", prev: "*", next: "return" }
    ],
    "quotes": [2, "single", { "allowTemplateLiterals": true }],
    "semi": 2,
    "semi-spacing": 2,
    "semi-style": 2,
    "space-before-blocks": 2,
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "spaced-comment": 2,
    "switch-colon-spacing": 2,
    "template-tag-spacing": 2
  }
};
