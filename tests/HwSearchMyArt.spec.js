import { test, expect } from '@playwright/test';
import {Login} from '../src/pages/HwLogIn.page';
import { Cred } from '../src/pages/HwCred.page';
import { YourFeedPage } from '../src/pages/yourfeed.page';
import {Search} from '../src/pages/HwSearchArt'
import {ExpSearch} from '../src/pages/HwExpectSearch'


test('Поиск ранее созданной статьи', async ({ page }) => {
// Предусловие: Должна быть создана статья под моей учеткой. 
// Пройти вначале тест создания статьи HwCreateNewArt.spec.js

const loginPage = new Login (page);
const CredInput = new Cred (page);
const yourfeed = new YourFeedPage (page);
const searchmyart = new Search (page);
const expects = new ExpSearch (page);

await loginPage.open();
await CredInput.input();
await expect(yourfeed.getProfileName()).toContainText('Aza@mail.ru');
await searchmyart.mypclick();
await expect(expects.exprctsearch()).toContainText('Azat Article');



});