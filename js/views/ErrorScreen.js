import AbstractView from './AbstractView';

class ErrorScreen extends AbstractView {

  constructor(error) {
    super();
    this.error = error;
  }

  getMarkup() {
    return `
      <div class="end">
        <p>Произошла ндопустимая ошибка: ${this.error.message}</p>
      </div>`;
  }

}

export default (error) => new ErrorScreen(error).element;
