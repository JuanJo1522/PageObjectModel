const BasePage = require('./BasePage');

class CheckoutPage extends BasePage {
  async fillInformation(information) {
    await this.page.getByPlaceholder('First Name').fill(information.firstName);
    await this.page.getByPlaceholder('Last Name').fill(information.lastName);
    await this.page.getByPlaceholder('Zip/Postal Code').fill(information.postalCode);
  }

  async continueToOverview() {
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }
}

module.exports = CheckoutPage;
