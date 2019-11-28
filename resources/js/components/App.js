import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './layout/Header';
import OrderPicker from './order-picker/OrderPicker';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={'jss1'}>
                    <Header/>
                </div>
                <div className={'MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3'}>
                    <Switch>
                        <Route path='/order-picker' component={OrderPicker} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));