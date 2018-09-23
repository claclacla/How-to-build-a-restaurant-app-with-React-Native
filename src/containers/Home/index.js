import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import CategoriesDataProvider from '../../dataProviders/api/CategoriesDataProvider';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      let categories = await CategoriesDataProvider.getCategories();
    } catch (error) {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Benvenuto!</Text>
        <TouchableHighlight style={styles.btn} onPress={() => navigation.navigate('TakeAwayRestaurants')} underlayColor="#888">
          <Text style={styles.btnText}>Take away</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} onPress={() => navigation.navigate('DeliveryRestaurants')} underlayColor="#888">
          <Text style={styles.btnText}>Delivery</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#777",
    width: 200,
    height: 80
  },
  btnText: {
    color: "#fff"
  },
});

export default Home;