import React, { PureComponent } from 'react';
import reducers from './TodoReducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import AddPage from './AddPage'
import TodoList from './TodoList'
import Toggle from './Toggle'


const store = createStore(reducers)

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <AddPage />
                <TodoList />
                {/* <Toggle /> */}
            </Provider>
        );
    }
}

export default App;