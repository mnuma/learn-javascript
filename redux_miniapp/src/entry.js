/* ライブラリのインポート */
import React from 'react'
import { createStore } from 'redux'
import { Provider }  from 'react-redux'

/* Appコンポーネントのインポート */
import App from './App'
/* Reducerから Store をインポート */
import { store } from './reducer'

// createStoreでstateを保持する
let applicationStore = createStore(store);

React.render (
    /* Appコンポーネント (App.jsからインポート) をProviderコンポーネント (react-reduxからインポート) でラップする */
    <Provider store={applicationStore}>
        <App />
    </Provider>,
    // rootElement下にコンポーネントを生成
    document.querySelector('#root')
);
