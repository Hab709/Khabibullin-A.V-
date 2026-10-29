import { test, expect } from '@playwright/test';
import {Login} from '../src/pages/HwLogIn.page';
import { YourFeedPage } from '../src/pages/yourfeed.page';
import {Create} from '../src/pages/HwCreateArticl';
import {CheckCreateNA} from '../src/pages/HwExpCreateNeArt';
import {Search} from '../src/pages/HwSearchArt';
import {DeleteArt} from '../src/pages/HwDeleteMyArt';
import {Add} from '../src/pages/HwAddFavorite';
import {ExpAddFav} from '../src/pages/HwExpectAddFavorite';

    
test.describe('Объединил предусловие + тест  Добавление статьи в избранное + постусловие', () => {

//Предусловие с созданием статьи
    test.beforeEach(async ({ page }) => {

    const loginPage = new Login (page);
    const yourfeed = new YourFeedPage (page);
    const createart = new Create (page);
    const checkart = new CheckCreateNA (page);

    await loginPage.open();
    await expect(yourfeed.getProfileName()).toContainText('Aza@mail.ru');
    await createart.creatart();
    await expect(checkart.checkcrnewart()).toContainText('Azat Article');     
  });

      //Постусловие удаление статьи после теста 
test.afterEach(async ({ page }) => {

    
    const searchmyart = new Search (page);
    const deletemyart = new DeleteArt (page);

    await searchmyart.mypclick(); 
    await deletemyart.del();      
  });

test('Добавление статьи в избранное', async ({ page }) => {

const favorite = new Add (page);
const searchmyart = new Search (page);
const checkaddfavorite = new ExpAddFav (page);

await searchmyart.mypclick();
await favorite.favoriteclick();
await expect(checkaddfavorite.checkcaadfav()).toContainText('1');
});

});