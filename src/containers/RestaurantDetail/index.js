import React from 'react';
import { View } from 'react-native';

import Products from './components/Products';

class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let restaurantName = this.props.navigation.state.params.restaurantName;
    this.setState({ restaurantName });
  }

  render() {
    return (
      <View>
        {this.state && this.state.restaurantName &&
          <Products restaurantName={this.state.restaurantName} />
        }
      </View>
    )
  }
}

export default RestaurantDetail;