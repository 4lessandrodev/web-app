const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
<<<<<<< HEAD
  moduleNameMapper: {
    "@utils(.*)$": "<rootDir>/src/utils/$1",
  }
=======
>>>>>>> 57e3e6d (feat(template): added web app template)
}

module.exports = createJestConfig(customJestConfig);
