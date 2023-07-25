// /** @type {import('ts-jest').JestConfigWithTsJest} */
// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "node",
// };
// import type { JestConfigWithTsJest } from 'ts-jest'

// const jestConfig: JestConfigWithTsJest = {
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // [...]
  // Replace `ts-jest` with the preset you want to use
  // from the above list
  preset: "ts-jest",
};

// export default jestConfig;

// Parsing error: ESLint was configured to run on `<tsconfigRootDir>/jest.config.ts`
// using `parserOptions.project`:
// /users/andreyf/documents/projects/video-games-database/tsconfig.json

// However, that TSConfig does not include this file. Either:
// - Change ESLint's list of included files to not include this file
// - Change that TSConfig to include this file
// - Create a new TSConfig that includes this file and include it in your parserOptions.project
// See the typescript-eslint docs for more
// info: https://typescript-eslint.io/linting/troubleshooting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
