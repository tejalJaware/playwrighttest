import {test,expect} from '@playwright/test'

test('locators',async({page})=>
{
    await page.goto('https://www.demoblaze.com');
   await page.click('#login2')
   await page.fill('#loginusername','pavanol');
   await page.locator('#loginpassword').fill('test@123');
   //await expect(await page.getByText('close')).click();
   //  await page.click("//div[@id='videoModal']//button[@type='button'][normalize-space()='Close']")
     await page.click("//button[normalize-space()='Log in']")
     await expect(page.locator('#nameofuser')).toContainText('Welcome')
     await expect(page.getByText('Log out')).toBeVisible();
   // await expect(page.locator('.d-block.img-fluid')).toHaveAttribute('src','iphone1.jpg');
     const links = await page.$$('a')
     for(const link of links)
     {
        const linktext = await link.textContent()
        console.log(linktext)
     }


    page.close();
})