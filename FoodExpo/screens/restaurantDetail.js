import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Color from "../constants/Color";
import { MEALS } from "../data/dummy-category";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const MenuItemScreen = (props) => {
  const meal = props.navigation.getParam("Meal");

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
            
          </View>
          <View style={styles.mealRow}>
            <Text style={styles.mealText1}>{meal}</Text>
          </View>

          <View style={styles.mealRow}>
            <Text style={styles.mealText}>We Are Open</Text>
          </View>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 500,
    //backgroundColor: "orange",
    margin: 20,
    justifyContent: "space-evenly"
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
    fontSize: 30,
    //color: "white",
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  mealText: {
    fontSize: 20,
    //color: "white",
    color:"green",
    fontWeight: "bold",
    
  },
});

export default MenuItemScreen;
