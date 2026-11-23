import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { loginAsStandardUser } from '../helpers/authHelper';

test('User can enter checkout information successfully', async ({ page }) => {
  // Create page objects
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Log in
  await loginAsStandardUser(page);
  // Add a backpack to the cart
  await productsPage.addBackpackToCart();
  // Open the cart
  await cartPage.navigateToCart();
  // Click Checkout
  await cartPage.proceedToCheckout();
  // Enter checkout information
  await checkoutPage.enterCheckoutInformation(
    'John',
    'Smith',
    'SW1A 1AA'
  );
  // Verify checkout overview page
  await expect(page).toHaveURL(/checkout-step-two\.html/);

});

test('User can complete an order successfully', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginAsStandardUser(page);
  await productsPage.addBackpackToCart();
  await cartPage.navigateToCart();
  await cartPage.proceedToCheckout();
  await checkoutPage.enterCheckoutInformation(
    'John',
    'Smith',
    'SW1A 1AA'
  );
  // Complete the order
  await checkoutPage.finishCheckout();

  // Verify the confirmation message
  await expect(checkoutPage.confirmationMessage)
    .toHaveText('Thank you for your order!');
});

test('User cannot checkout with empty customer information', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  await loginAsStandardUser(page);
  await productsPage.addBackpackToCart();
  await cartPage.navigateToCart();
  await cartPage.proceedToCheckout();
  await checkoutPage.continueButton.click();
  // Verify the error message
  await expect(checkoutPage.errorMessage)
    .toContainText('First Name is required');

  // Verify the user stays on the information page
  await expect(page).toHaveURL(/checkout-step-one\.html/);
});

