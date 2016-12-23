import Application from './Application';
import 'whatwg-fetch';

const API = 'https://intensive-ecmascript-server-tudvgacdag.now.sh/pixel-hunter/questions';

window.fetch(API)
    .then((response) => Application.checkResponseStatus(response))
    .then((response) => response.json())
    .then((data) => {
      Application.data = data;
      return data;
    })
    .then(Application.showIntro())
    .catch(Application.showError);

