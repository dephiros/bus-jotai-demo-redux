import { Provider } from 'react-redux';

import store from './store';

export default function () {
  return <Provider store={store}>Hello</Provider>;
}
