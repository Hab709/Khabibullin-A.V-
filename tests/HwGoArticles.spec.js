import { test, expect } from '@playwright/test';
import {Login} from '../src/pages/HwLogIn.page'
import { Cred } from '../src/pages/HwCred.page';
import { YourFeedPage } from '../src/pages/yourfeed.page';
import {GoToNewArt} from '../src/pages/HwGoToNewArt';
import {CheckGoToNA} from '../src/pages/HwExpGoToArt'

test('Переход в New Articles', async ({ page }) => {

const loginPage = new Login (page);
const CredInput = new Cred (page);
const yourfeed = new YourFeedPage (page);
const goNewArt = new GoToNewArt (page);
const checkGoNA = new CheckGoToNA (page);

await loginPage.open();
await CredInput.input();
await expect(yourfeed.getProfileName()).toContainText('Aza@mail.ru');
await goNewArt.gona();
await expect(checkGoNA.checkNewArt()).toBeVisible();
});