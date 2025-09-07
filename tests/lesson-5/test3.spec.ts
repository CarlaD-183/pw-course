import { test } from '@playwright/test';

test('Todo page - Thêm 100 todo list', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click("//a[contains(text(),'Bài học 3: Todo page')]");
    const input = page.locator("//input[@id='new-task']");
    const addButton = page.locator("//button[@id='add-task']");
    for (let i = 1; i <= 100; i++) {
        await input.fill(`Todo ${i}`);
        await addButton.click();
    }
});

// Xoa Todo le:
test('Delete odd todos', async ({page}) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click("//a[contains(text(),'Bài học 3: Todo page')]");
    page.on('dialog', async (dialog) => {
        await dialog.accept();
    });
    const deleteBtn = page.locator("//button[contains(text(),'Delete')]");

    for (let i = 0; i <= 100; i++) {
        if (i % 2 !== 0) {
            await deleteBtn.click();
        }
    }
});

