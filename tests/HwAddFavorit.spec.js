import { test, expect } from '@playwright/test';
import {Login} from '../src/pages/HwLogIn.page';
import {Create} from '../src/pages/HwCreateArticl';
import {Search} from '../src/pages/HwSearchArt';
import {ActionArt} from '../src/pages/HwActionWithArt';
import {Add} from '../src/pages/HwAddFavorite';
import {ExpAddFav} from '../src/pages/HwExpectAddFavorite';

    
test.describe('Объединил предусловие + тест  Добавление статьи в избранное + постусловие', () => {

//Предусловие с созданием статьи
    test.beforeEach(async ({ page }) => {

    const loginPage = new Login (page);
    const createart = new Create (page);

    await loginPage.open();
    await createart.creatart();     
  });

      //Постусловие удаление статьи после теста 
test.afterEach(async ({ page }) => {

    
    const searchmyart = new Search (page);
    const deletemyart = new ActionArt (page);

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