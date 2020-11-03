import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const Searchbar = ({ search, onSearch, onSearchSubmit }) => {
  return (
    <View style={styles.backG}>
      <Feather style={styles.iconStyle} name="search" size={30} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={search}
        onChangeText={(newSearch) => onSearch(newSearch)}
        onEndEditing={onSearchSubmit}
        //passing onSearchSubmit is equal to passing (new)=>{onSearchSubmit(new)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backG: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 30,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default Searchbar;
