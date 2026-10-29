export class DellComm {
constructor (page) {    
// техническое описание страницы браузером
// описываем браузер
    this.page = page;
    // todo посмотреть тип элемента
    this.delcom = page.getByRole('button').filter({ hasText: /^$/ });
}
 async delletecom() {
    this.page.once('dialog', dialog => {
    dialog.accept().catch(() => {}); // соглашаемся в сплывающем окне
  });
 await this.delcom.click();
 
}
}