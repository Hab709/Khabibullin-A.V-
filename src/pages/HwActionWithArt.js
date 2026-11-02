export class ActionArt {
    constructor (page) {
        this.page = page;
        this.delcom = page.getByRole('button').filter({ hasText: /^$/ });
        this.expectdelete = page.locator('.article-preview');
        this.wrightcom = page.getByRole('textbox', { name: 'Write a comment...' });
        this.postcom = page.getByRole('button', { name: 'Post Comment' });
        this.expcom = page.getByText('Мой комментарий');
        this.delart = page.getByRole('heading', { name: 'Azat Article' });
        this.presdell = page.getByRole('button', {name: 'Delete Article'}).first();
        
    }
    
    async delletecom() {
    this.page.once('dialog', dialog => {
    dialog.accept().catch(() => {}); // соглашаемся в сплывающем окне
  });
     await this.delcom.click();
}

checkdell () {
        return this.expectdelete;
    }

    async addnewcom (page) {
    await this.wrightcom.fill('Мой комментарий');
    await this.postcom.click();
  }

  checkaddnewcom() {
          return this.expcom;
}

async del() {

  await this.delart.click();

  this.page.once('dialog', dialog => {
    dialog.accept().catch(() => {}); // соглашаемся в сплывающем окне
  });

  await this.presdell.click();

  await this.page.waitForTimeout(500);
}

checkdelcom () {
        return this.delcom;
    }



}