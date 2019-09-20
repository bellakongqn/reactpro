import {createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux'
import React, { PureComponent } from 'react';
import Index from './Index'

const store = createStore(rootReducer,
    applyMiddleware(
        thunkMiddleware, // 允许我们 dispatch() 函数
      ))


class App extends PureComponent {
    
    render() {
        return (
           <Provider store={store}>
               <Index />
           </Provider>
        );
    }
}

export default App;
