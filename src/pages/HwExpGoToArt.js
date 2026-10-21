export class CheckGoToNA {
constructor (page) {    
// техническое описание страницы браузером
// описываем браузер
    this.page = page;
    // todo посмотреть тип элемента
    this.goToNewArt = page.getByPlaceholder("Article Title");
}
 checkNewArt() {
          return this.goToNewArt;
}
}