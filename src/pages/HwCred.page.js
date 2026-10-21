export class Cred  {
    constructor (page) {
this.page = page;
this.inputEmail = page.getByRole('textbox', { name: 'Email' });
this.inputPassword = page.getByRole('textbox', { name: 'Password' });
this.preslogin = page.getByRole('button', { name: 'Login' });
this.expecttext = page.getByRole('navigation');
}

  async input (page) {
    await this.inputEmail.fill('Aza@mail.ru');
    await this.inputPassword.fill('Aza@mail.ru');
    await this.preslogin.click();
    
  }

};