import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' ;
import Store from '../imports/client/store/store';
import MineSweeper from '../imports/client/components/MineSweeper';

function App() {
  return(
    <Provider store={Store}>
      <MineSweeper/>
    </Provider>
  );
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('#root'))
});