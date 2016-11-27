/**
 * Created by glebvorontsov on 26/11/16.
 * @param {String} element Query string to select HTML elements
 * @param {String} action Optional parameter to define type of action. Default is click
 * @param {Function} callBackFunction Callback for event listener
 * @param {Module} module Module to render
 * @return {Boolean} True if eventListener was attached
 */
const clickHandler = (element, action = 'click', callBackFunction, module) => {
  if (element === '' || typeof callBackFunction === 'function') {
    return false;
  }
  const elementsList = document.querySelectorAll(element);
  for (let el of elementsList) {
    el.addEventListener(action, callBackFunction(module));
  }
  return true;
};

export default clickHandler;
