import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { loginAsStandardUser } from '../helpers/authHelper';

test('User can add a backpack to the shopping cart', async ({ page }) => {
  const productsPage = new ProductsPage(page);

  // Log in 
  await loginAsStandardUser(page);

  // Add backpack to the cart
  await productsPage.addBackpackToCart();

  // Verify the cart shows 1 item
  await expect(productsPage.shoppingCartBadge).toHaveText('1');
});

test('User can remove a backpack from the shopping cart', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await loginAsStandardUser(page);
  await productsPage.addBackpackToCart();
  await expect(productsPage.shoppingCartBadge).toHaveText('1');
  // Remove the backpack
  await productsPage.removeBackpackFromCart();
  // Verify the cart badge disappears
  await expect(productsPage.shoppingCartBadge).toHaveCount(0);
});

test('User can see the correct product in the shopping cart', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  await loginAsStandardUser(page);
  await productsPage.addBackpackToCart();
  // Open the shopping cart
  await cartPage.navigateToCart();
  // Verify the correct product appears
  await expect(cartPage.cartItemName)
    .toHaveText('Sauce Labs Backpack');
});
