/**
 * Created by glebvorontsov on 20/11/16.
 * @param {String} elementString String with HTML element to create
 * @param {String} containerType Optional parameter for parent container type, by default <div>
 * @return {Node} container HTML Node including HTML element
 */
const getElementFromTemplate = (elementString, containerType = 'div') => {
  const container = document.createElement(containerType);
  container.innerHTML = elementString;
  return container.cloneNode(true);
};

export default getElementFromTemplate;
