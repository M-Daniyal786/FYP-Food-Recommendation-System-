import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const MealList = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={styles.mealRow}>
            <Image
              source={{
                uri: props.Image,
              }}
              style={{ width: 350, height: 200 }}
            />
            
          </View>
          <View style={styles.mealRow}>
            <Text style={styles.mealText1}>{props.Title}</Text>
            <Text style={styles.mealText}>{props.Price}</Text>
          </View>
          
          {/* <View style={styles.mealrevRow}>
            <Text>{props.Price}</Text>
          </View> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 300,
    //backgroundColor: "orange",
    margin: 10,
    borderRadius: 15,
    borderWidth: 2,
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

export default MealList;
