const graphQLRules = [
  "error", {
    "env": "relay",
    "schemaJson": require("./schema.json"),
    "tagName": "graphql"
  }
];
  
module.exports = {
  "extends": [
    "react-app",
    "airbnb",
    "prettier/react",
    "plugin:prettier/recommended"
  ],
  "env": {
    "browser": true,
    "jest/globals": true
  },
  "plugins": [
    "jest",
    "graphql"
  ],
  "parser": "babel-eslint",
  "rules": {
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "import/prefer-default-export": "off",
    "linebreak-style": ["error", "unix"],
    "no-console": ["error", { "allow": ["error", "warn", "info"] }],
    "no-nested-ternary": "off",
    "no-underscore-dangle": ["error", { "allow": ["__typename"] }],
    "no-unused-expressions": ["error", { "allowTernary": true }],
    "react/forbid-prop-types": ["error", { "forbid": ["any"] }],
    "react/jsx-filename-extension": ["error", { "extensions": [".js"] }],
    "react/jsx-props-no-spreading":  "off",
    "react/prop-types": ["error", { "ignore": ["error", "props"] }],
    "graphql/named-operations": graphQLRules,
    "graphql/capitalized-type-name": graphQLRules,
    "graphql/no-deprecated-fields": graphQLRules,
    "graphql/template-strings": graphQLRules
  }
}
