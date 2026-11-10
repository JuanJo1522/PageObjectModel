const { test, expect } = require('@playwright/test');
const PageFactory = require('../utilities/factory/PageFactory');
const CheckoutInformationBuilder = require('../utilities/builder/CheckoutInformationBuilder');

test('completes a purchase using page objects, factory, and builder', async ({ page }) => {

  const pages = new PageFactory(page);
  const checkoutInformation = new CheckoutInformationBuilder()
    .withFirstName('Juan')
    .withLastName('Perez')
    .withPostalCode('12345')
    .build();

  await pages.loginPage().open();
  await pages.loginPage().login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/\/inventory\.html$/);

  await pages.inventoryPage().addBackpackToCart();
  await pages.inventoryPage().openCart();
  await pages.cartPage().checkout();
  await pages.checkoutPage().fillInformation(checkoutInformation);
  await pages.checkoutPage().continueToOverview();
  await pages.checkoutOverviewPage().finishOrder();

  await expect(pages.checkoutOverviewPage().confirmationMessage())
    .toHaveText('Thank you for your order!');
});
