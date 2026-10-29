
const URL =  'https://realworld.qa.guru/'; 

export class Login  {
    constructor (page) {
this.page = page;
this.loginlink = page.getByRole('link', {name: 'Login'});
this.inputEmail = page.getByRole('textbox', { name: 'Email' });
this.inputPassword = page.getByRole('textbox', { name: 'Password' });
this.preslogin = page.getByRole('button', { name: 'Login' });
this.expecttext = page.getByRole('navigation');
}
  async open(){
    await this.page.goto(URL)
    await this.loginlink.click();
    await this.inputEmail.fill('Aza@mail.ru');
    await this.inputPassword.fill('Aza@mail.ru');
    await this.preslogin.click();
  }

};