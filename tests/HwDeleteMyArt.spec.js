import { test, expect } from '@playwright/test';
import {Login} from '../src/pages/HwLogIn.page';
import { YourFeedPage } from '../src/pages/yourfeed.page';
import {Search} from '../src/pages/HwSearchArt';
import { ActionArt } from '../src/pages/HwActionWithArt';
import {Create} from '../src/pages/HwCreateArticl';
import {CheckCreateNA} from '../src/pages/HwExpCreateNeArt';


// Предусловие с созданием статьи
test.beforeEach(async ({ page }) => {
    const loginPage = new Login (page);
    const yourfeed = new YourFeedPage (page);
    const createart = new Create (page);
    const checkart = new CheckCreateNA (page);
    
    // Авторизуюсь и создаю статью
    await loginPage.open();
    await expect(yourfeed.getProfileName()).toContainText('Aza@mail.ru');
    await createart.creatart();
    
    
    // Проверяю отображение созданной статьи
    await expect(checkart.checkcrnewart()).toContainText('Azat Article');
  });

test('Удаление ранее созданной статьи', async ({ page }) => {


const searchmyart = new Search (page);
const actionWArt = new ActionArt (page);

await searchmyart.mypclick();
await actionWArt.del();
await expect(actionWArt.checkdell()).toHaveText('Articles not available.');

});