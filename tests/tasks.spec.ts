import { test, expect } from '@playwright/test';

test('Should be able to create a new task', async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.fill('#newTask', 'Terminar a aula 15 hoje');
});

// Aula 16!!!