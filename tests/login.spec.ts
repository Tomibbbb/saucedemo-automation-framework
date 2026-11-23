import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User can log in with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  // Open the SauceDemo login page
  await loginPage.navigate();

  // Log in using valid credentials
  await loginPage.login('standard_user', 'secret_sauce');

  // Verify that the user reaches the products page
  await expect(page).toHaveURL(/inventory\.html/);

  // Verify that the Products heading is visible
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});

test('User cannot log in with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();

  // Try logging in with incorrect credentials
  await loginPage.login('invalid_user', 'wrong_password');

  // Verify that an error message appears
  await expect(loginPage.errorMessage)
    .toContainText('Username and password do not match');

  // Verify that the user stays on the login page
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
