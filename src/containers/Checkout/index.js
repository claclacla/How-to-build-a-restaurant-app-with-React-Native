import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

// onChangeText={(text) => this.setState({ text })}

class Checkout extends React.Component {
  placeOrder() {

  }

  render() {
    return (
      <View style={styles.mainBox}>
        <View style={styles.myDataBox}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>My data</Text>
          </View>
          <View style={styles.fieldNameBox}>
            <Text style={styles.fieldName}>Name</Text>
          </View>
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.textInput}
          />
          <View style={styles.fieldNameBox}>
            <Text style={styles.fieldName}>Surname</Text>
          </View>
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.textInput}
          />
          <View style={styles.fieldNameBox}>
            <Text style={styles.fieldName}>Email</Text>
          </View>
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.textInput}
          />
          <View style={styles.fieldNameBox}>
            <Text style={styles.fieldName}>Mobile</Text>
          </View>
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.textInput}
          />
        </View>
        <TouchableHighlight
          onPress={() => this.placeOrder()}
          style={styles.placeOrderButton}
        >
          <Text style={styles.placeOrderButtonText}>Place order</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainBox: {
    flex: 1
  },
  myDataBox: {
    flex: 0.9
  },
  placeOrderButton: {
    flex: 0.1,
    backgroundColor: "#666",
    justifyContent: "center",
    alignItems: "center"
  },
  placeOrderButtonText: {
    color: "#fff"
  },
  titleBox: {
    height: 50,
    justifyContent: "center",
    marginTop: 2,
    marginLeft: 2,
    marginBottom: 2
  },
  title: {
    fontWeight: "bold",
    fontSize: 20
  },
  fieldNameBox: {
    height: 50,
    justifyContent: "center",
    marginTop: 2,
    marginLeft: 2,
    marginBottom: 2
  },
  fieldName: {
    fontSize: 18
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

export default Checkout