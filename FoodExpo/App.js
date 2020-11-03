// import { StyleSheet, Text, View } from 'react-native';

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import {createSwitchNavigator} from 'react-navigation';
// import React from 'react'

// import { Provider as AuthProvider } from './context/AuthContext'
// import { setNavigator } from './navigationRef';

// import LoginScreen from './screens/LoginScreen';
// import SignupScreen from './screens/SignupScreen';
// import CategoryMealsScreen from './screens/CategoryMealsScreen'
// import CategoryScreen from './screens/CategoryScreen'

// import Color from './constants/Color'

// const switchNav = createSwitchNavigator({

// })

// const MainNavigator = createStackNavigator({
//   Home:{
//     screen : LoginScreen, navigationOptions: () =>({
//       title: "SignIn",
//       headerStyle: {
//         backgroundColor: "#37474f",

//       },
//       headerTitleStyle: {
//         color: "#ffffff",

//       },
//       headerTitleContainerStyle: {
//         alignItems: 'center',
//         justifyContent: 'center',
//       }
//     })
//   },
//   Category: {
//     screen: CategoryScreen, navigationOptions:()=>({
//       title: "Categories",
//       headerStyle:
//       {
//           backgroundColor: Color.primaryColor,
//         }
//         ,
//         headerTintColor: "#fff",

//     })
//   },
//   CategoryMeals:{
//     screen: CategoryMealsScreen, navigationOptions:()=>({
//       title: "Menu",
//       headerStyle:
//       {
//           backgroundColor: Color.primaryColor,
//         }
//         ,
//         headerTintColor: "#fff",

//     })
//   },
//   SignUp: {
//     screen: SignupScreen, navigationOptions: () => ({
//       title: "SignUp",
//       headerStyle: {
//         backgroundColor: "#37474f",

//       },
//       headerTitleStyle: {
//         color: "#ffffff",
//         textAlign:"center"

//       },
//        headerTitleContainerStyle: {
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//       headerLeft:null
//     })
//   }

// },
//   {
//     initialRouteName: 'Home',

//   }

// );

// const App = createAppContainer(MainNavigator);

// export default () => {
//   return (
//     <AuthProvider>
//       <App ref={(navigator) => { setNavigator(navigator) }} />
//     </AuthProvider>
//   );

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StyleSheet, Text, View } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import React from "react";

import { Provider as AuthProvider } from "./context/AuthContext";
import { setNavigator } from "./navigationRef";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import CategoryScreen from "./screens/CategoryScreen";
import MenuItemScreen from "./screens/MenuItemScreen"
import RestaurantDetail from "./screens/restaurantDetail";
import Color from "./constants/Color";

import DashboardScreen from "./screens/DashboardScreen";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./components/headerButton";

const MainNavigator = createStackNavigator({
  Category: {
    screen: CategoryScreen,
    navigationOptions: () => ({
      title: "Categories",
      headerStyle: {
        backgroundColor: Color.primaryColor,
      },
      headerTintColor: "#fff",
    }),
  },

  CategoryMeals: {
    screen: CategoryMealsScreen,
    navigationOptions: () => ({
      title: "Menu",
      headerStyle: {
        backgroundColor: Color.primaryColor,
      },
      headerTintColor: "#fff",
    }),
  },

  MealDetail:{
    screen: MenuItemScreen,
  },
  RestaurantDetail:{
    screen: RestaurantDetail,
  }


  
});

const dashNav = createStackNavigator({
  DashboardScreen: {
    screen: DashboardScreen,
    navigationOptions: () => ({
      title: "Home",
      headerStyle: {
        backgroundColor: Color.primaryColor,
      },
      headerTintColor: "#fff",
    }),
  },
});

const drawerNav = createDrawerNavigator({
  Category: { screen: MainNavigator },
  Dashboard: { screen: dashNav },
});

const switchNav = createSwitchNavigator({
  Home: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: "SignIn",
      headerStyle: {
        backgroundColor: "#37474f",
      },
      headerTitleStyle: {
        color: "#ffffff",
      },
      headerTitleContainerStyle: {
        alignItems: "center",
        justifyContent: "center",
      },
    }),
  },
  SignUp: {
    screen: SignupScreen,
    navigationOptions: () => ({
      title: "SignUp",
      headerStyle: {
        backgroundColor: "#37474f",
      },
      headerTitleStyle: {
        color: "#ffffff",
        textAlign: "center",
      },
      headerTitleContainerStyle: {
        alignItems: "center",
        justifyContent: "center",
      },
      headerLeft: null,
    }),
  },
  Category: { screen: drawerNav },
  initialRouteName: "Home"
});

const App = createAppContainer(switchNav);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
