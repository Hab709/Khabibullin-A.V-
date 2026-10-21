import { test, expect } from '@playwright/test';
import {Login} from '../src/pages/HwLogIn.page';
import { Cred } from '../src/pages/HwCred.page';
import { YourFeedPage } from '../src/pages/yourfeed.page';
import {GoToNewArt} from '../src/pages/HwGoToNewArt';
import {Create} from '../src/pages/HwCreateArticl';
import {CheckCreateNA} from '../src/pages/HwExpCreateNeArt';


test('Создание статьи', async ({ page }) => {

const loginPage = new Login (page);
const CredInput = new Cred (page);
const yourfeed = new YourFeedPage (page);
const goNewArt = new GoToNewArt (page);
const createart = new Create (page);
const checkart = new CheckCreateNA (page);

await loginPage.open();
await CredInput.input();
await expect(yourfeed.getProfileName()).toContainText('Aza@mail.ru');
await goNewArt.gona();
await createart.creatart();
await expect(checkart.checkcrnewart()).toContainText('Azat Article');


});