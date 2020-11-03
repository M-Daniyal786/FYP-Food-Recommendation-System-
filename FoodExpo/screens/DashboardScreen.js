import React, { useState } from "react";
import { View, Text, StyleSheet,Button,ScrollView } from "react-native";
import Searchbar from "../components/SearchBar";
import {MEALS} from '../data/dummy-category'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from '../components/headerButton'
import { FlatList,TextInput, TouchableOpacity } from "react-native-gesture-handler";
import foodrecsv from "../api/foodrecsv";
import recsys from "../api/rec-sys"

const DashboardScreen = (props) => {
  DashboardScreen.navigationOptions = (navData) => {
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
  
  const [search, setSearch] = useState('');
  const [result, setResult] = useState('');
  const [meal, setMeal] = useState('');
  
  const params = JSON.stringify({
    "title": search,
  });
  
  const pars = JSON.stringify({
    "title": search,
  });


  const searchMeal = async ()=>{
    try {
      const response = await recsys.post("/api/",params,{

        "headers": {

          "content-type": "application/json",

        },

      })
      setResult(response.data)
      
    } catch (error) {
      console.log(error)
    }

    }

    const mealS = async ()=>{
      try {
        
        const response = await recsys.post("/search/",pars,{

          "headers": {
   
            "content-type": "application/json",
   
          },
   
        })
        setMeal(response.data)
      } catch (error) {
          console.log(error)
      }
      
   }

   const renderItem = ({ item }) => {
    console.log("item", item)
    return (
    <ScrollView>
      <TouchableOpacity>
        <Text style={styles.textRec} onPress={() =>
        props.navigation.navigate({
          routeName: "RestaurantDetail",
          params: {
            Meal: item,
          },
        })
      }  >{item}</Text>
      </TouchableOpacity>
    </ScrollView>
    )
  }

  return (
    <View>
      <Searchbar
        search={search}
        onSearch={(Search) => {
          setSearch(Search)
        }}
  
        //onSearchSubmit={searchMeal}
        onSearchSubmit={mealS}
      /> 
      {
      meal ? <TouchableOpacity onPress={() =>
        props.navigation.navigate({
          routeName: "RestaurantDetail",
          params: {
            Meal: meal,
          },
        })
      } ><Text style={styles.textRec} >{meal}</Text></TouchableOpacity> : null
      }

     
     {
      meal ? <Button title="See Similar Restaurant" onPress={searchMeal} /> : null
     }

       <FlatList
       horizontal
       pagingEnabled={true}
       showsHorizontalScrollIndicator={false}
          data={result}
          keyExtractor={(item, index) => {
            // console.log("index", index)
            return index.toString();
          }}
          renderItem={renderItem}
        />  

    </View>

  );
};

const styles = StyleSheet.create({
  gridItemStyle: {
  
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
  textRec:{
    color: "orange",
    fontSize: 15,
    borderRadius:5,
    borderWidth:2,
    padding: 20,
    margin: 20

  }
});

export default DashboardScreen;
