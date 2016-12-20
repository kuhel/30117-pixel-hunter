import Application from './Application';
import 'whatwg-fetch';

const API = 'https://intensive-ecmascript-server-tudvgacdag.now.sh/pixel-hunter/questions';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

window.fetch(API)
    .then(checkStatus)
    .then((response) => response.json())
    .then((data) => {
      Application.data = data;
      return data;
    })
    .then(Application.showIntro())
    .catch(Application.showError);

