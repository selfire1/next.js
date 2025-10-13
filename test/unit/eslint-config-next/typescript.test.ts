import { FlatCompat } from '@eslint/eslintrc'

describe('eslint-config-next/typescript', () => {
  it('should match expected resolved TypeScript configuration', () => {
    const compat = new FlatCompat({
      baseDirectory: __dirname,
    })

    const flatConfigs = compat.extends('eslint-config-next/typescript')

    // Merge all rules and plugins from flat configs
    const allRules = {}
    const allPlugins = {}

    flatConfigs.forEach((config) => {
      if (config.rules) Object.assign(allRules, config.rules)
      if (config.plugins) Object.assign(allPlugins, config.plugins)
    })

    const cleanConfig = {
      rules: allRules,
      plugins: Object.keys(allPlugins),
    }

    expect(cleanConfig).toMatchInlineSnapshot(`
     {
       "plugins": [
         "@typescript-eslint",
       ],
       "rules": {
         "@typescript-eslint/ban-ts-comment": "error",
         "@typescript-eslint/no-array-constructor": "error",
         "@typescript-eslint/no-duplicate-enum-values": "error",
         "@typescript-eslint/no-empty-object-type": "error",
         "@typescript-eslint/no-explicit-any": "error",
         "@typescript-eslint/no-extra-non-null-assertion": "error",
         "@typescript-eslint/no-misused-new": "error",
         "@typescript-eslint/no-namespace": "error",
         "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
         "@typescript-eslint/no-require-imports": "error",
         "@typescript-eslint/no-this-alias": "error",
         "@typescript-eslint/no-unnecessary-type-constraint": "error",
         "@typescript-eslint/no-unsafe-declaration-merging": "error",
         "@typescript-eslint/no-unsafe-function-type": "error",
         "@typescript-eslint/no-unused-expressions": 1,
         "@typescript-eslint/no-unused-vars": 1,
         "@typescript-eslint/no-wrapper-object-types": "error",
         "@typescript-eslint/prefer-as-const": "error",
         "@typescript-eslint/prefer-namespace-keyword": "error",
         "@typescript-eslint/triple-slash-reference": "error",
         "constructor-super": "off",
         "getter-return": "off",
         "no-array-constructor": "off",
         "no-class-assign": "off",
         "no-const-assign": "off",
         "no-dupe-args": "off",
         "no-dupe-class-members": "off",
         "no-dupe-keys": "off",
         "no-func-assign": "off",
         "no-import-assign": "off",
         "no-new-native-nonconstructor": "off",
         "no-new-symbol": "off",
         "no-obj-calls": "off",
         "no-redeclare": "off",
         "no-setter-return": "off",
         "no-this-before-super": "off",
         "no-undef": "off",
         "no-unreachable": "off",
         "no-unsafe-negation": "off",
         "no-unused-expressions": "off",
         "no-unused-vars": "off",
         "no-var": "error",
         "no-with": "off",
         "prefer-const": "error",
         "prefer-rest-params": "error",
         "prefer-spread": "error",
       },
     }
    `)
  })
})
