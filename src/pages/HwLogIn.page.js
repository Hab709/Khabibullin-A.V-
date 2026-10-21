
const URL =  'https://realworld.qa.guru/'; 

export class Login  {
    constructor (page) {
this.page = page;
this.loginlink = page.getByRole('link', {name: 'Login'});
}
  async open(){
    await this.page.goto(URL)
    await this.loginlink.click();
  }

};