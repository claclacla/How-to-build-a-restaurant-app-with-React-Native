import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Benvenuto!</Text>
    <TouchableHighlight style={styles.btn} onPress={() => navigation.navigate('TakeAwayRestaurants')} underlayColor="#888">
      <Text style={styles.btnText}>Take away</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.btn} onPress={() => navigation.navigate('DeliveryRestaurants')} underlayColor="#888">
      <Text style={styles.btnText}>Delivery</Text>
    </TouchableHighlight>
  </View>
);

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