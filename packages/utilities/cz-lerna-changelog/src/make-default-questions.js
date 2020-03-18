import Promise from 'promise';

const { types } = require('@jsdevtools/conventional-commit-types');
const choices = [];
for (const type of Object.keys(types)) {
  choices.push({ value: type, name: `${type}: ${types[type].description}` });
}

module.exports = (allPackages, changedPackages) => [
  {
    type: 'autocomplete',
    name: 'type',
    message: "Select the type of change that you're committing:",
    choices,
  },
  {
    type: 'input',
    name: 'scope',
    message: 'Denote the scope of this change:',
  },
  {
    type: 'input',
    name: 'subject',
    message: 'Write a short, imperative tense description of the change:\n',
    filter: function(value) {
      return value.charAt(0).toLowerCase() + value.slice(1);
    },
    validate: function(value) {
      return !!value;
    },
  },
  {
    type: 'input',
    name: 'body',
    message: 'Provide a longer description of the change (optional). Use "|" to break new line:\n',
  },
  {
    type: 'input',
    name: 'breaking',
    message: 'List any BREAKING CHANGES (if none, leave blank):\n',
  },
  {
    type: 'input',
    name: 'footer',
    message: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
  },
  {
    type: 'checkbox',
    name: 'packages',
    default: changedPackages,
    choices: allPackages,
    message: `The packages that this commit has affected (${changedPackages.length} detected)\n`,
    // validate: function (input) {
    //   const type = commitMessage.type;
    //   const isRequired = ['feat', 'fix'].some((type) => messageHead.indexOf(type) === 0);
    //   const isProvided = input.length > 0;
    // eslint-disable-next-line max-len
    //   return isRequired ? (isProvided ? true : `Commit type "${type}" must affect at least one component`) : true;
    // }
  },
];
