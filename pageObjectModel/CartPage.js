const BasePage = require('./BasePage');

class CartPage extends BasePage {
  async checkout() {
    await this.page.locator('[data-test="checkout"]').click();
  }
}

module.exports = CartPage;
