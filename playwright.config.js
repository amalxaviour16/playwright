// @ts-check

const config = {
  testDir: "./tests/specs",
  testMatch: "01-login-flow.spec.js",
  timeout: 40000,
  reporter: "html",
  expect: {
    timeout: 4000,
  },
  use: {
    browserName: "chromium",
    headless: false,
    screenshot: "on",
    trace:"on"
  },
};
module.exports = config;
