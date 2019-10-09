# configs
Share configs across packages. Include them in your `package.json` through extends and then override settings as needed.

## babel-config
```json
"babel": {
  "extends": "@jsdevtools/babel-config"
}
```

## eslint-config
```json
"eslintConfig": {
  "extends": "@jsdevtools/eslint-config"
}
```

## eslint-config-ts
eslint config for typescript projects.
```json
"eslintConfig": {
  "extends": "@jsdevtools/eslint-config-ts"
},
```

## prettier
```json
"prettier": "@jsdevtools/prettier-config",
```

## stylelint
```json
"stylelint": {
  "extends": "@jsdevtools/stylelint-config"
}
```
