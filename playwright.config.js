// @ts-check


const config = {

  testDir: './tests',
  timeout: 40000,
  expect: {
    timeout: 40000
  },
  use: {

    browserName: 'chromium',
    headless: false
  }


}
module.exports=config;

