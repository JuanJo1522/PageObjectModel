const BasePage = require('./BasePage');

class CartPage extends BasePage {
  async checkout() {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
  }
}

module.exports = CartPage;
