import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';

import CategoriesDataProvider from '../../dataProviders/api/CategoriesDataProvider';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      let categories = await CategoriesDataProvider.getCategories();

      this.setState({ categories });
    } catch (error) {

    }
  }

  onSelectCategory(categoryName) {
    const { navigate } = this.props.navigation;
    navigate('Restaurants', {
      categoryName: categoryName
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state && this.state.categories &&
          <FlatList
            data={this.state.categories}
            renderItem={({ item }) =>
              <TouchableHighlight style={styles.categoryBtn} onPress={() => this.onSelectCategory(item.name)}>
                <Text style={styles.categoryName}>{item.name}</Text>
              </TouchableHighlight>
            }
            keyExtractor={(item, index) => item.uid}
          />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  categoryBtn: {
    marginTop: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#777",
    height: 80
  },
  categoryName: {
    color: "#fff"
  },
});

export default Home;