import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-category";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/headerButton";

const CategoryScreen = (props) => {
  CategoryScreen.navigationOptions = (navData) => {
    return {
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Nav Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
    };
  };

  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItemStyle}
        onPress={() =>
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryID: itemData.item.id,
            },
          })
        }
      >
        <Text style={styles.tColor}>{itemData.item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={1} />
  );
};

const styles = StyleSheet.create({
  gridItemStyle: {
    flex: 1,
    margin: 15,
    //backgroundColor: "",
    padding: 25,
    borderRadius: 10,
    borderWidth:2
    //height: 150,
  },
  tColor: {
    color: "orange",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CategoryScreen;
