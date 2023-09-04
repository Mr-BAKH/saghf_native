import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import { StyleSheet  } from 'react-native';
import IonIcon from '@expo/vector-icons/Ionicons'
import Ad_Add_page from './adAdd'
import Chat_page from './chat'
import Home from './home'


const Tab = createMaterialBottomTabNavigator();

const SliceApp = ()=> {

    return (
    <NavigationContainer>
      <Tab.Navigator
       initialRouteName="Home"
       activeColor="rgb(8 51 68)"
       inactiveColor="rgba(8, 51, 68, 0.8)"
       shifting={true}
       labeled={true}
       barStyle={styles.barStyle}
        >
        <Tab.Screen
         name="Home" 
         component={Home} 
         options={{
            tabBarColor:"red",
            tabBarLabel: 'خانه',
            tabBarIcon: ({ color }) => (
              <IonIcon name="home-outline" color={color} size={25} />
            ),
          }}
         />

        <Tab.Screen 
          name="AddAd_page" 
          component={Ad_Add_page} 
          options={{
            tabBarLabel:"افزودن آگهی",
            tabBarColor:'blue',
            tabBarIcon: ({color }) => (
              <IonIcon name="add-circle-outline" color={color} size={25} />
            ),
          }}
        />

        <Tab.Screen 
          name="Chat_page" 
          component={Chat_page} 
          options={{
            tabBarLabel:"پیام ها",
            tabBarBadge: true ,
            tabBarColor:"yellow",
            tabBarIcon: ({color }) => (
              <IonIcon name="chatbox-outline" color={color} size={25} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
    );
  }

const styles= StyleSheet.create({

    barStyle:{ 
        backgroundColor: '#fff', 
    }
})



  export default SliceApp;