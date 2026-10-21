import { test, expect } from '@playwright/test';
import {Login} from '../src/pages/HwLogIn.page'
import { Cred } from '../src/pages/HwCred.page';
import { YourFeedPage } from '../src/pages/yourfeed.page';
import {GoToGlob} from '../src/pages/HwGoToGlob'
import {GlobFeedPage} from '../src/pages/HwExpGlobFeed'

test('переход в Global Feed', async ({ page }) => {

const loginPage = new Login (page);
const CredInput = new Cred (page);
const yourfeed = new YourFeedPage (page);
const globFeed = new GoToGlob (page);
const cheGlFeed = new GlobFeedPage (page);


await loginPage.open();
await CredInput.input();
await expect(yourfeed.getProfileName()).toContainText('Aza@mail.ru');
await globFeed.goto();
await expect(cheGlFeed.checkGlobFeed()).toHaveClass(/active/);
});



