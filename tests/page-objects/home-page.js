class HomePage {
  constructor(page) {
    this.page = page;
    this.$profileName = (name) =>
      page.locator(`//a[contains(text(),"${name}")]`);
  }
}

module.exports = HomePage;
