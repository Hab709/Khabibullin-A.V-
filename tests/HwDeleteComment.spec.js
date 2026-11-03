import { test, expect } from '@playwright/test';
import {Login} from '../src/pages/HwLogIn.page';
import {Create} from '../src/pages/HwCreateArticl';
import {Search} from '../src/pages/HwSearchArt';
import { ActionArt } from '../src/pages/HwActionWithArt';

    
test.describe('Объединил предусловие + тест  Удаление  комментария + постусловие', () => {

//Предусловие с созданием статьи
    test.beforeEach(async ({ page }) => {

    const loginPage = new Login (page);
    const createart = new Create (page);
    const comment = new ActionArt (page);
    

    await loginPage.open();
    await createart.creatart();
    await comment.addnewcom();     
  });

      //Постусловие удаление статьи после теста 
test.afterEach(async ({ page }) => {

    
    const searchmyart = new Search (page);
    const deletemyart = new ActionArt (page);

    await searchmyart.mypclick(); 
    await deletemyart.del();      
  });

test('Удаление  комментария', async ({ page }) => {


    const dellcomm = new ActionArt (page);
  
await dellcomm.delletecom();
await expect(dellcomm.checkdelcom()).not.toBeVisible();
});

});