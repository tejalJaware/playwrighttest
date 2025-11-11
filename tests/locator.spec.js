import {test,expect} from '@playwright/test'

test('locators',async ({page})=>
{
    await page.goto('https://www.demoblaze.com/')
    const btn = page.getByRole('link',{name : 'Log in'})
    await btn.click()
    await page.locator('#loginusername').fill('tejal@123')
    await page.fill('#loginpassword','tejal')
    await page.click("button[onclick='logIn()']")
  // await page.getByRole('link', { name: 'Contact' }).click();

    page.close();

});



    

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal-email').click();
  await page.getByTestId('royal-email').fill('tejal@gmail.com');
  await page.getByTestId('royal-email').press('Tab');
  await page.getByTestId('royal-pass').fill('Tejal@123');
  await page.getByTestId('royal-login-button').click();
});

test("pick locator",async({page})=>
{
    await page.goto('https://www.demoblaze.com')
})

test('Assertions',async({page})=>
{
    await page.goto('https://www.demoblaze.com');

})


