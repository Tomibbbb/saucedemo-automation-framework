
# SauceDemo Automation Framework

An end-to-end UI automation testing framework built using Playwright, TypeScript, and the Page Object Model (POM) design pattern.

This project automates key user journeys on the SauceDemo e-commerce website.

## Technologies Used

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- GitHub Actions (CI/CD)
- Git and GitHub

## Test Scenarios

### Login Tests
- Verify successful login with valid credentials
- Verify error message with invalid credentials

### Shopping Cart Tests
- Add a product to the cart
- Remove a product from the cart
- Verify the correct product is displayed in the cart

### Checkout Tests
- Enter checkout information
- Complete an order successfully
- Verify validation when required checkout information is missing

## Test Coverage

- 8 automated test scenarios
- 3 browsers: Chromium, Firefox, and WebKit
- 24 test executions across all browsers

## Project Structure

```text
saucedemo-automation-framework/
├── .github/workflows/
│   └── playwright.yml
├── helpers/
│   └── authHelper.ts
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── tests/
│   ├── login.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
├── playwright.config.ts
└── package.json
```

## How to Run the Tests

### 1. Clone the repository

```bash
git clone https://github.com/Tomibbbb/saucedemo-automation-framework.git
cd saucedemo-automation-framework
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

### 4. Run all tests

```bash
npx playwright test
```

### 5. View the HTML test report

```bash
npx playwright show-report
```

## Continuous Integration

GitHub Actions automatically runs the Playwright test suite on pushes and pull requests to the main branch.

The workflow installs dependencies, installs the required browsers, and executes the automated tests.

## Test Reporting

Playwright HTML reports provide detailed test execution results.

Screenshots and traces are retained for failed tests to support debugging and investigation.

## Application Under Test

https://www.saucedemo.com/

## Author

GitHub: https://github.com/Tomibbbb