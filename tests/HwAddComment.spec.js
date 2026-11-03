import { test, expect } from '@playwright/test';
import {Login} from '../src/pages/HwLogIn.page';
import {Create} from '../src/pages/HwCreateArticl';
import {Search} from '../src/pages/HwSearchArt';
import { ActionArt } from '../src/pages/HwActionWithArt';


    
test.describe('Объединил предусловие + тест  Добавление комментария + постусловие', () => {

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

test('Добавление комментария', async ({ page }) => {

const addcom = new ActionArt (page);
//const expaddnewcom = new CheckAddCom (page);

await addcom.addnewcom();
await expect(addcom.checkaddnewcom()).toContainText('Мой комментарий');
});

});