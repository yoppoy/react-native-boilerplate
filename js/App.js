import React, {Component} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import createStore from './redux';
import RootContainer from './containers/RootContainer';

const store = createStore();

export default () => {
    return (
        <Provider store={store}>
            <RootContainer/>
        </Provider>
    );
};
