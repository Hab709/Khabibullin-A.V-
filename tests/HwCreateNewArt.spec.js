import { test, expect } from '@playwright/test';
import {Login} from '../src/pages/HwLogIn.page';
import { YourFeedPage } from '../src/pages/yourfeed.page';
import {Create} from '../src/pages/HwCreateArticl';
import {CheckCreateNA} from '../src/pages/HwExpCreateNeArt';
import {Search} from '../src/pages/HwSearchArt';
import {DeleteArt} from '../src/pages/HwDeleteMyArt';

    
test.describe('Создание статьи.Объединил тест и постусловие в один блок', () => {
      //Постусловие для удаления статьи после её создания 
test.afterEach(async ({ page }) => {

    const searchmyart = new Search (page);
    const deletemyart = new DeleteArt (page);

    await searchmyart.mypclick(); 
    await deletemyart.del();      
  });

test('Создание статьи', async ({ page }) => {

const loginPage = new Login (page);
const yourfeed = new YourFeedPage (page);
const createart = new Create (page);
const checkart = new CheckCreateNA (page);
const searchmyart = new Search (page);
const deletemyart = new DeleteArt (page);

await loginPage.open();
await expect(yourfeed.getProfileName()).toContainText('Aza@mail.ru');
await createart.creatart();
await expect(checkart.checkcrnewart()).toContainText('Azat Article');

});

});
