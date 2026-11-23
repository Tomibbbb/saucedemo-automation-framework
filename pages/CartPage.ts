import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItemName: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartItemName = page.locator(
      '[data-test="cart-list"] [data-test="inventory-item-name"]'
    );
  }

  async navigateToCart() {
    await this.page.locator(
      '[data-test="shopping-cart-link"]'
    ).click();

    await this.page.waitForURL('**/cart.html');
  }

  async proceedToCheckout() {
    await this.page.locator(
      '[data-test="checkout"]'
    ).click();
  }
}
