export class DeleteArt {
constructor (page) {    
// техническое описание страницы браузером
// описываем браузер
    this.page = page;
    // todo посмотреть тип элемента
    this.delart = page.getByRole('heading', { name: 'Azat Article' })
    this.presdell = page.getByRole('button', {name: 'Delete Article'}).first()
}
 
  async del() {

  await this.delart.click();

  this.page.once('dialog', dialog => {
    dialog.accept().catch(() => {}); // соглашаемся в сплывающем окне
  });

  await this.presdell.click();

  await this.page.waitForTimeout(500);
}

}