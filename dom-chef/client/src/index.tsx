import 'the-new-css-reset/css/reset.css';
import './styles/index.css';
import 'airbnb-browser-shims';
import { h } from 'dom-chef';

import App from './components/App';

document.body.append(<App />);
