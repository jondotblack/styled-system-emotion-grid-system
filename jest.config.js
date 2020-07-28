module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/**/*.stories.{js,jsx}', '!**/node_modules/**'],
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 50,
      lines: 40,
      statements: 40,
    },
  },
  moduleDirectories: ['node_modules', 'components', 'styles', 'utils', __dirname],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/testing/setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
};
