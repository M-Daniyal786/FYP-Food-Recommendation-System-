import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Color from "../constants/Color";
import { MEALS } from "../data/dummy-category";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const MenuItemScreen = (props) => {
  const mealid = props.navigation.getParam("MealID");

  const MealtoDisplay = MEALS.find((meal) => {
    return meal.id === mealid;
  });

  MenuItemScreen.navigationOptions = {
    title: "Detail",
    headerStyle: {
      backgroundColor: Color.primaryColor,
    },
    headerTintColor: "#fff",
  };

  return (
    <View style={styles.mealItem}>
      
        <View>
          <View style={styles.mealRow}>
            <Image
              source={{
                uri: MealtoDisplay.imageUrl,
              }}
              style={{ width: 350, height: 300 }}
            />
          </View>
          <View style={styles.mealRow}>
            <Text style={styles.mealText1}>{MealtoDisplay.title}</Text>
          </View>

          <View style={styles.mealRow}>
            <Text style={styles.mealText}>price: {MealtoDisplay.price}Rs</Text>
          </View>
          <View style={styles.mealRow}>
            <Text style={styles.mealText}>Description:</Text>
          </View>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 500,
    //backgroundColor: "orange",
    margin: 10,
  },
  mealRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 5,
  },
  mealrevRow: {
    flexDirection: "row-reverse",
    width: "100%",
  },
  mealText1: {
    fontSize: 20,
    //color: "white",
    fontWeight: "bold",
    textAlign: "left",
    width: "80%",
  },
  mealText: {
    fontSize: 20,
    //color: "white",
    fontWeight: "bold",
  },
});

export default MenuItemScreen;
