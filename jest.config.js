const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

module.exports = {
    moduleNameMapper: {
        'src(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node']
};