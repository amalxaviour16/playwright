// @ts-check

const config = {
  testDir: "./tests",
  timeout: 40000,
  reporter: "html",
  expect: {
    timeout: 4000,
  },
  use: {
    browserName: "chromium",
    headless: false,
  },
};
module.exports = config;
