/**
 * Base class for the Views
 */
export default class AbstractView {

/**
 * Bind event listeners. By default there is nothing to bind
 * @return {HTMLElement}
 */
  get element() {
    if (!this._element) {
      this._element = document.createElement('div');
      this._element.innerHTML = this.getMarkup();
    }
    return this._element;
  }

  /**
   * Returns markup of View. By default throws error
   */
  getMarkup() {
    throw new Error('Abstract method should be implemented');
  }

  /**
   * Bind event listeners. By default there is nothing to bind
   */
  bindHandlers() {
  }

  /**
   * Clear event listeners. By default there is nothing to clear
   */
  clearHandlers() {
    // By default nothing to clear
  }
}
