import {AppRegistry} from 'react-native';
import App from './App';

import Ionicons from 'react-native-vector-icons/Fonts/Ionicons.ttf';

const IoniconsStyles = `@font-face {
  src: url(${Ionicons});
  font-family: Ionicons;
}`;

const style = document.createElement('style');
style.type = 'text/css';

if (style.styleSheet) {
  style.styleSheet.cssText = IoniconsStyles;
} else {
  style.appendChild(document.createTextNode(IoniconsStyles));
}

document.head.appendChild(style);

if (module.hot) {
  module.hot.accept();
}
AppRegistry.registerComponent('React Native Web', () => App);
AppRegistry.runApplication('React Native Web', {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});