export class CheckAddCom {
constructor (page) {    
// техническое описание страницы браузером
// описываем браузер
    this.page = page;
    // todo посмотреть тип элемента
    this.expcom = page.getByText('Мой комментарий');
}
 checkaddnewcom() {
          return this.expcom;
}
}