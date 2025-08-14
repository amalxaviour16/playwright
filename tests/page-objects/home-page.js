class HomePage {
  constructor(page) {
    this.page = page;
    this.$profileName = page.locator('//a[contains(text(),"Admin")]');
  }
}

module.exports = HomePage;
