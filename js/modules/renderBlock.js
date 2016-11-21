/**
 * Created by glebvorontsov on 21/11/16.
 * @param {String} block Block to render on page
 * @param {String} parentNodeId Optional parameter — ID of a node where block will be rendered
 */

export const renderBlock = (block, parentNodeId = 'main') => {
  const parentNode = document.getElementById(parentNodeId);
  parentNode.innerHTML = '';
  return parentNode.appendChild(block);
};
