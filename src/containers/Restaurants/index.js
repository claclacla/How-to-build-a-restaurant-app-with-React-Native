import React from 'react';
import { View } from 'react-native';

import RestaurantsList from './components/RestaurantsList';

class Restaurants extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let categoryName = this.props.navigation.state.params.categoryName;
    this.setState({ categoryName });
  }

  render() {
    return (
      <View>
        {this.state && this.state.categoryName &&
          <RestaurantsList categoryName={this.state.categoryName} />
        }
      </View>
    )
  }
}

export default Restaurants;