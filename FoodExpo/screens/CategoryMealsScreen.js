import React from "react";
import { View, StyleSheet, Text,Image } from "react-native";
import Color from '../constants/Color'
import { CATEGORIES } from "../data/dummy-category";
import { MEALS } from "../data/dummy-category";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import MealsList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  const catid = props.navigation.getParam('categoryID');
  const selectedCat = CATEGORIES.find((cat) => cat.id === catid);

  const MealtoDisplay = MEALS.filter((meal) => {
    return meal.catId === catid;
  });

  CategoryMealsScreen.navigationOptions={
    title: "Menu",
    headerStyle:
    {
        backgroundColor: Color.primaryColor,
      }
      ,
      headerTintColor: "#fff",
    
  }

  const renderListItem = (itemData) => {
    
    return (
      <MealsList
        Image={itemData.item.imageUrl}
        Title={itemData.item.title}
        Price={itemData.item.price}
        onSelectMeal={()=> props.navigation.navigate({routeName: 'MealDetail',params:{MealID:itemData.item.id}})}
          
          // () => {
          // props.navigation.navigate("Menu", { MealID: itemData.item.id });
      />
      // <View>
      //     <Image
      //         source={{
      //           uri:itemData.item.imageUrl
      //         }}
      //         style={{ width: 200, height: 200 }}
      //       />
      //   </View>
    );
  };

  return (
    <View>
      <FlatList data={MealtoDisplay} renderItem={renderListItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
