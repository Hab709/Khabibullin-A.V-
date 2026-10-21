import { test, expect } from '@playwright/test';
import {Login} from '../src/pages/HwLogIn.page'
import { Cred } from '../src/pages/HwCred.page';
import { YourFeedPage } from '../src/pages/yourfeed.page';

test('Авторизация под своей учеткой ', async ({ page }) => {

const loginPage = new Login (page);
const CredInput = new Cred (page);
const yourfeed = new YourFeedPage (page);



await loginPage.open();
await CredInput.input();
await expect(yourfeed.getProfileName()).toContainText('Aza@mail.ru');


});