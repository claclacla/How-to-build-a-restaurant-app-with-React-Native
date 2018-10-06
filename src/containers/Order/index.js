import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Order extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {    
    return (
      <View>
        <Text>Order</Text>
      </View>
    )
  }
}

function mapStateToProps({ order }) {
  return {
    order
  }
}

export default connect(
  mapStateToProps,
  null
)(Order);