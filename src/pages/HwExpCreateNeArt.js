export class CheckCreateNA {
constructor (page) {    
// техническое описание страницы браузером
// описываем браузер
    this.page = page;
    // todo посмотреть тип элемента
    this.crnewart = page.getByRole('heading', { name: 'Azat Article' })
}
 checkcrnewart() {
          return this.crnewart;
}
}