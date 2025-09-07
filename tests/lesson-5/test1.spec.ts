import { test } from '@playwright/test';

test('Check navigating to playwright material page', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await test.step("Navigate to Register page", async () => {
        await page.click("//a[@href = '01-xpath-register-page.html']");
    })
    await test.step(" Check Register new user", async () => {
        await page.locator("//input[@id= 'username']").fill("user1");
        await page.locator("//input[@id= 'email']").fill("user1@gmail.com");
        await page.locator("//radio[@id = 'male']").check();
        await page.locator("//input[@id= 'traveling']").check();
        await page.selectOption("//option[@value= 'art']", "Art");
        await page.selectOption("//select[@id='country']", "Canada");
        await page.locator("//input[@id = 'dob']").fill("07/09/2025");
        await page.setInputFiles("//input[@id ='profile']", "lesson5/lesson-5.txt");
        await page.locator("//textarea[@id='bio']").fill(" playwright testing user1");
        await page.selectOption("//span[@id='RatingValue']", "4");
        await page.selectOption("//span[@id='colorDisplay']", "#ff0000");
        await page.isChecked("//input[@id='newsletter']");
        await page.locator("//input[@id='toggleOption']").click();
        await page.locator("//input[@id='customDate']").fill("10/10/2024");
        await page.locator("//button[@type='submit']").click();
        await page.waitForTimeout(3000);

    });
});
