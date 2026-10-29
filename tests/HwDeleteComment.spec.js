import { test, expect } from '@playwright/test';
import {Login} from '../src/pages/HwLogIn.page';
import { YourFeedPage } from '../src/pages/yourfeed.page';
import {Create} from '../src/pages/HwCreateArticl';
import {CheckCreateNA} from '../src/pages/HwExpCreateNeArt';
import {Search} from '../src/pages/HwSearchArt';
import {DeleteArt} from '../src/pages/HwDeleteMyArt';
import {AddComment} from '../src/pages/HwAddComment';
import {CheckAddCom} from '../src/pages/HwExpectAddComment';
import {DellComm} from '../src/pages/HwDeleteComm';
import {CheckDelCom} from '../src/pages/HwExpectDeleteComm';
    
test.describe('Объединил предусловие + тест  Удаление  комментария + постусловие', () => {

//Предусловие с созданием статьи
    test.beforeEach(async ({ page }) => {

    const loginPage = new Login (page);
    const yourfeed = new YourFeedPage (page);
    const createart = new Create (page);
    const checkart = new CheckCreateNA (page);
    const addcom = new AddComment (page);
    const expaddnewcom = new CheckAddCom (page);

    await loginPage.open();
    await expect(yourfeed.getProfileName()).toContainText('Aza@mail.ru');
    await createart.creatart();
    await expect(checkart.checkcrnewart()).toContainText('Azat Article');
    await addcom.addnewcom();
    await expect(expaddnewcom.checkaddnewcom()).toContainText('Мой комментарий');     
  });

      //Постусловие удаление статьи после теста 
test.afterEach(async ({ page }) => {

    
    const searchmyart = new Search (page);
    const deletemyart = new DeleteArt (page);

    await searchmyart.mypclick(); 
    await deletemyart.del();      
  });

test('Удаление  комментария', async ({ page }) => {

const deletcom = new DellComm (page);
const expdelcom = new CheckDelCom (page);

await deletcom.delletecom();
await expect(expdelcom.checkdelcom()).not.toBeVisible();
});

});