/* eslint-disable linebreak-style */
module.exports = {
  verbose: true,
  testMatch: ['**/src/**/test/*.js', '!**/playground/**', '!**/stryker-tmp/**'],
  collectCoverage: false,
  setupFilesAfterEnv: ['jest-allure/dist/setup', 'jest-expect-message'],
  reporters: [
    'default',
    [
      'jest-stare',
      {
        resultDir: 'test-reports/jest-stare',
        reportTitle: 'Tests Report',
      },
    ],
  ],
  roots: ['src'],
  coverageReporters: ['text-summary'],
  collectCoverageFrom: [
    '**/src/*.js',
    '!**/node_modules/**',
    '!**/test/**',
  ],
  forceExit: true,
  testEnvironment: 'node',
  notify: true,
  notifyMode: 'change',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-master',
    ['jest-watch-toggle-config', {
      setting: 'verbose',
    }],
    ['jest-watch-toggle-config', {
      setting: 'collectCoverage',
    }],
  ],
};
