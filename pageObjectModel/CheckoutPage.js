const BasePage = require('./BasePage');

class CheckoutPage extends BasePage {
  async fillInformation(information) {
    await this.page.locator('[data-test="firstName"]').fill(information.firstName);
    await this.page.locator('[data-test="lastName"]').fill(information.lastName);
    await this.page.locator('[data-test="postalCode"]').fill(information.postalCode);
  }

  async continueToOverview() {
    await this.page.locator('[data-test="continue"]').click();
  }
}

module.exports = CheckoutPage;
