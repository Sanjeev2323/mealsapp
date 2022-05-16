import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';


import {NavigationContainer} from '@react-navigation/native';
import Favourite from './screens/favorates';

import MealsOverView from './screens/MealsOverviewScreen';

import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';




import CategoryScreen from './screens/CategoryScreen';
import MealDetailsScreen from './screens/mealDetailsScreen';
import FavouriteContextProvider from './store/context/FavouriteContext';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigator(){
  return <Drawer.Navigator  
  screenOptions={{headerStyle:{backgroundColor:'rgba(250, 136, 6, 0.953)'}, sceneContainerStyle:{backgroundColor:'yellow'}}}>
    <Drawer.Screen name="categories" component={CategoryScreen}/>
    <Drawer.Screen name="favourites" component={Favourite}/>
  </Drawer.Navigator>
}




export default function App() {
  return (
    <>
    <StatusBar style='dark' />
    <FavouriteContextProvider>
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{cardStyle:{backgroundColor:'rgb(242, 250, 6)'}, headerStyle:{backgroundColor:'rgba(250, 136, 6, 0.953)'} }} >
        <Stack.Screen name="MealsCategories" component={DrawerNavigator}
        options={{title:'All Categories' ,headerShown:false}}/>
        <Stack.Screen name="MealsOverview"  component={MealsOverView}
        options={({route,navigation})=>{
          const catId=route.params.categoryId;
         return  {title:catId}
        }} />

        <Stack.Screen name='MealDetails' component={MealDetailsScreen}  />
      </Stack.Navigator>
      
    </NavigationContainer>
    </FavouriteContextProvider>
    
    </>
  );
}


