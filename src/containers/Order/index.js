import React from 'react';
import { StyleSheet, View, FlatList, Text, Button, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

class Order extends React.Component {
  constructor(props) {
    super(props);
  }

  onDecrementProductAmount(index) {

  }

  onIncrementProductAmount(index) {

  }

  removeProduct(index) {

  }

  render() {
    return (
      <View>
        {<FlatList
          data={this.props.order.products}
          renderItem={({ item, index }) =>
            <View style={styles.product}>
              <View style={styles.amountButtonsBox}>
                <TouchableHighlight style={styles.amountButtonsElements} onPress={() => this.onDecrementProductAmount(index)}>
                  <Text>-</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.amountButtonsElements}>
                  <Text>{item.amount}</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.amountButtonsElements} onPress={() => this.onIncrementProductAmount(index)}>
                  <Text>+</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.productNameBox}>
                <Text style={styles.productName}>{item.name}</Text>
              </View>
              <View style={styles.removeButtonBox}>
                <Button
                  style={styles.removeButton}
                  onPress={() => this.removeProduct(index)}
                  title="Remove"
                />
              </View>
            </View>
          }
          keyExtractor={(item, index) => item.uid}
        />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  product: {
    height: 80,
    backgroundColor: "#777",
    marginTop: 1,
    alignItems: "flex-start",
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  amountButtonsBox: {
    flex: 0.2,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  amountButtonsElements: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    height: 80
  },
  productNameBox: {
    flex: 0.5,
    height: 80,
    justifyContent: "center",
  },
  productName: {
    color: "#fff"
  },
  removeButtonBox: {
    flex: 0.3,
    height: 80,
    justifyContent: "center",
    alignItems: "flex-end"
  }
});

function mapStateToProps({ order }) {
  return {
    order
  }
}

export default connect(
  mapStateToProps,
  null
)(Order);