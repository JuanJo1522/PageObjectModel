const BasePage = require('./BasePage');

class InventoryPage extends BasePage {
  async addBackpackToCart() {
    await this.page.getByTestId('add-to-cart-sauce-labs-backpack').click();
  }

  async openCart() {
    await this.page.getByTestId('shopping-cart-link').click();
  }
}

module.exports = InventoryPage;
