import AbstractView from './AbstractView';

class LoaderScreen extends AbstractView {
  getMarkup() {
    return `
      <div class="result">
        <p>Идет загрузка данных...</p>
    </div>`;
  }
}

export default () => new LoaderScreen().element;
