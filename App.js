import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import restaurants from './src/reducers/restaurants';
import products from './src/reducers/products';

import Home from './src/containers/Home';
import Restaurants from './src/containers/Restaurants';
import RestaurantDetail from './src/containers/RestaurantDetail';
//import AppStatusBar from './src/components/AppStatusBar';

const store = createStore(combineReducers({ restaurants, products }), applyMiddleware(thunk));

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Restaurants: {
    screen: Restaurants
  },
  RestaurantDetail: {
    screen: RestaurantDetail
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          {/* <AppStatusBar backgroundColor="#fff" barStyle="light-content" /> */}
          <AppStackNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});