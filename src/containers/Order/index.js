import React from 'react';
import { StyleSheet, View, FlatList, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class Order extends React.Component {
  constructor(props) {
    super(props);
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
              <View style={styles.productNameBox}>
                <Text style={styles.productName}>{item.name}</Text>
              </View>
              <View style={styles.orderElementsBox}>
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
  productNameBox: {
    flex: 0.7,
    height: 80,
    justifyContent: "center",
  },
  productName: {
    color: "#fff"
  },
  orderElementsBox: {
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