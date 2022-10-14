/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMarch: ["**/**/*.test.ts"],
  verbose: true,
  forceExit: true,
  //clearMocks:true,
};