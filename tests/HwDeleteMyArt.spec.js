import { test, expect } from '@playwright/test';
import {Login} from '../src/pages/HwLogIn.page';
import {Search} from '../src/pages/HwSearchArt';
import { ActionArt } from '../src/pages/HwActionWithArt';
import {Create} from '../src/pages/HwCreateArticl';



// Предусловие с созданием статьи
test.beforeEach(async ({ page }) => {
    const loginPage = new Login (page);
    const createart = new Create (page);
    
    
    // Авторизуюсь и создаю статью
    await loginPage.open();
    await createart.creatart();
    
  });

test('Удаление ранее созданной статьи', async ({ page }) => {


const searchmyart = new Search (page);
const actionWArt = new ActionArt (page);

await searchmyart.mypclick();
await actionWArt.del();
await expect(actionWArt.checkdell()).toHaveText('Articles not available.');

});