import { test, expect } from '@playwright/test';

test('Thêm sản phẩm vào giỏ hàng - Bài học 2', async ({ page }) => {
  // 1. Truy cập trang chính
  await page.goto('https://material.playwrightvn.com/');

  // 2. Click vào "Bài học 2: Product page"
  await page.click("//a[contains(text(),'Bài học 2: Product page')]");
  await test.step('adding products to cart', async()=>{
    await page.locator("//button[@data-product-id=1]").dblclick();
    await page.locator("//button[@data-product-id=2]").dblclick();
    await page.locator("//button[@data-product-id=2]").click();
    await page.locator("//button[@data-product-id=3]").click();
  });
});
  