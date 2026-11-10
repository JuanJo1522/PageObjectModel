const BasePage = require('./BasePage');

class InventoryPage extends BasePage {
  async addBackpackToCart() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  async openCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }
}

module.exports = InventoryPage;
