const CartPage = require('../../pageObjectModel/CartPage');
const CheckoutOverviewPage = require('../../pageObjectModel/CheckoutOverviewPage');
const CheckoutPage = require('../../pageObjectModel/CheckoutPage');
const InventoryPage = require('../../pageObjectModel/InventoryPage');
const LoginPage = require('../../pageObjectModel/LoginPage');

class PageFactory {
  constructor(page) {
    this.page = page;
  }

  loginPage() {
    return new LoginPage(this.page);
  }

  inventoryPage() {
    return new InventoryPage(this.page);
  }

  cartPage() {
    return new CartPage(this.page);
  }

  checkoutPage() {
    return new CheckoutPage(this.page);
  }

  checkoutOverviewPage() {
    return new CheckoutOverviewPage(this.page);
  }
}

module.exports = PageFactory;
