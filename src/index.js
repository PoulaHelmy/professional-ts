
import 'regenerator-runtime/runtime';
import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/App';

function initializeReactApp() {
  const appContainer = document.getElementById('appContainer');
  if (!appContainer) throw new Error('No #appContainer found in DOM');
  ReactDOM.render(React.createElement(App), appContainer, () => {
    console.log('React app initialized');
  });
}

initializeReactApp();
