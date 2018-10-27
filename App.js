import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import restaurants from './src/reducers/restaurants';
import products from './src/reducers/products';
import order from './src/reducers/order';

import OrderButton from './src/common/OrderButton';
import Home from './src/containers/Home';
import Restaurants from './src/containers/Restaurants';
import RestaurantDetail from './src/containers/RestaurantDetail';
import Order from './src/containers/Order';
//import AppStatusBar from './src/components/AppStatusBar';

const store = createStore(combineReducers({ restaurants, products, order }), applyMiddleware(thunk));

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerRight: (<OrderButton navigate={navigation.navigate} />)
    }),
  },
  Restaurants: {
    screen: Restaurants,
    navigationOptions: ({ navigation }) => ({
      title: "Restaurants",
      headerRight: (<OrderButton navigate={navigation.navigate} />)
    })
  },
  RestaurantDetail: {
    screen: RestaurantDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.restaurantName,
      headerRight: (<OrderButton navigate={navigation.navigate} />)
    })
  },
  Order: {
    screen: Order,
    navigationOptions: ({ navigation }) => ({
      title: "Order"
    })
  }
});

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