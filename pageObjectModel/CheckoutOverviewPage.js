const BasePage = require('./BasePage');

class CheckoutOverviewPage extends BasePage {
  async finishOrder() {
    await this.page.getByRole('button', { name: 'Finish' }).click();
  }

  confirmationMessage() {
    return this.page.getByText('Thank you for your order!');
  }
}

module.exports = CheckoutOverviewPage;
