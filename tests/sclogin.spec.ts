import { test } from '@playwright/test';
import { SCLoginPage } from '../pages/SCLoginPage';

test('scotia login test for invalid username and password', async ({ page }) => {

    const scLoginPage = new SCLoginPage(page);

    await scLoginPage.goto();
    

    await scLoginPage.login(
        'yourusername',
        'yourpassword'
    );

    await scLoginPage.verifyInvalidLoginMessage();

    await scLoginPage.clickDone();
});