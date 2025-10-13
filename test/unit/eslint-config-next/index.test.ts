/**
 * @rushstack/eslint-patch modifies Node's module resolution to allow
 * eslint-config-next to provide plugin dependencies. However, it fails
 * in Jest because:
 *
 * 1. The patch walks up module.parent chain to find ESLint's location
 * 2. Jest's module system creates a different hierarchy than normal Node.js
 * 3. This causes: "Failed to patch ESLint because the calling module was not recognized"
 *
 * We mock it because we only need to test the config structure, not the
 * runtime module resolution. The config object itself is valid without the patch.
 *
 * TODO: Remove when eslint-config-next is updated to Flat config.
 */
jest.mock('@rushstack/eslint-patch/modern-module-resolution', () => {})

import { FlatCompat } from '@eslint/eslintrc'

describe('eslint-config-next', () => {
  it('should match expected resolved configuration', () => {
    const compat = new FlatCompat({
      baseDirectory: __dirname,
    })

    const flatConfigs = compat.extends('eslint-config-next')

    // Merge all rules and plugins from flat configs
    const allRules = {}
    const allPlugins = {}

    flatConfigs.forEach((config) => {
      if (config.rules) Object.assign(allRules, config.rules)
      if (config.plugins) Object.assign(allPlugins, config.plugins)
    })

    const cleanConfig = {
      rules: allRules,
      // Full plugins are too long as each contains its own setup.
      plugins: Object.keys(allPlugins),
    }

    expect(cleanConfig).toMatchInlineSnapshot(`
     {
       "plugins": [
         "react",
         "react-hooks",
         "@next/next",
         "import",
         "jsx-a11y",
       ],
       "rules": {
         "@next/next/google-font-display": "warn",
         "@next/next/google-font-preconnect": "warn",
         "@next/next/inline-script-id": "error",
         "@next/next/next-script-for-ga": "warn",
         "@next/next/no-assign-module-variable": "error",
         "@next/next/no-async-client-component": "warn",
         "@next/next/no-before-interactive-script-outside-document": "warn",
         "@next/next/no-css-tags": "warn",
         "@next/next/no-document-import-in-page": "error",
         "@next/next/no-duplicate-head": "error",
         "@next/next/no-head-element": "warn",
         "@next/next/no-head-import-in-document": "error",
         "@next/next/no-html-link-for-pages": "warn",
         "@next/next/no-img-element": "warn",
         "@next/next/no-page-custom-font": "warn",
         "@next/next/no-script-component-in-head": "error",
         "@next/next/no-styled-jsx-in-document": "warn",
         "@next/next/no-sync-scripts": "warn",
         "@next/next/no-title-in-document-head": "warn",
         "@next/next/no-typos": "warn",
         "@next/next/no-unwanted-polyfillio": "warn",
         "import/no-anonymous-default-export": "warn",
         "jsx-a11y/alt-text": [
           "warn",
           {
             "elements": [
               "img",
             ],
             "img": [
               "Image",
             ],
           },
         ],
         "jsx-a11y/aria-props": "warn",
         "jsx-a11y/aria-proptypes": "warn",
         "jsx-a11y/aria-unsupported-elements": "warn",
         "jsx-a11y/role-has-required-aria-props": "warn",
         "jsx-a11y/role-supports-aria-props": "warn",
         "react-hooks/exhaustive-deps": "warn",
         "react-hooks/rules-of-hooks": "error",
         "react/display-name": 2,
         "react/jsx-key": 2,
         "react/jsx-no-comment-textnodes": 2,
         "react/jsx-no-duplicate-props": 2,
         "react/jsx-no-target-blank": "off",
         "react/jsx-no-undef": 2,
         "react/jsx-uses-react": 2,
         "react/jsx-uses-vars": 2,
         "react/no-children-prop": 2,
         "react/no-danger-with-children": 2,
         "react/no-deprecated": 2,
         "react/no-direct-mutation-state": 2,
         "react/no-find-dom-node": 2,
         "react/no-is-mounted": 2,
         "react/no-render-return-value": 2,
         "react/no-string-refs": 2,
         "react/no-unescaped-entities": 2,
         "react/no-unknown-property": "off",
         "react/no-unsafe": 0,
         "react/prop-types": "off",
         "react/react-in-jsx-scope": "off",
         "react/require-render-return": 2,
       },
     }
    `)
  })
})
