import {useLayoutEffect, useContext} from 'react';

import { View, Text, Image, StyleSheet ,ScrollView ,Button} from "react-native";
import MealDetails from "../components/mealdetails";
import { MEALS } from "../data/dummy-data";
import  IconButton from '../components/iconButton';
import { FavouriteContext} from '../store/context/FavouriteContext';

function MealDetailsScreen({ route,navigation }) {

  const FavMealContext=useContext(FavouriteContext);

  const MealId = route.params.MealId;
  const SelectedMeal = MEALS.find((meal) => meal.id == MealId);

  
  const mealIsFav=FavMealContext.ids.includes(MealId);

  function favMealHandler(){
    
    if(mealIsFav){
      FavMealContext.removeFavourite(MealId);

    }else{
     FavMealContext.addFavourite(MealId);
    }
  }
    

useLayoutEffect(()=>{
  navigation.setOptions({
    headerRight:()=>{return <IconButton icon={ mealIsFav ? 'star': 'star-outline'} color='yellow' onPress={favMealHandler}/>}
  }
    )
},[navigation,favMealHandler]);
  
  return (
      <ScrollView>
    <View>
      <Image
        source={{ uri: SelectedMeal.imageUrl }}
        style={styles.imageContainer}
      />
      <View style={styles.textContainer}>
        <Text  style={styles.text}>{SelectedMeal.title}</Text>
      </View>
      <MealDetails
        duration={SelectedMeal.duration}
        complexity={SelectedMeal.complexity}
        affordability={SelectedMeal.affordability}
      />
      <View style={styles.textContainer}>
      <Text style={styles.text}>ingredients</Text>
      </View>
      <View style={styles.textContainer}>
      {SelectedMeal.ingredients.map((ingredient) => (
        <Text  style={styles.text} key={ingredient}>{ingredient}</Text>
      ))}
      </View>
      <>
      <View style={styles.textContainer}>
     
      <Text  style={styles.text}>Steps</Text>
      </View>
      </>
    <View  style={styles.textContainer}>
      
      {SelectedMeal.steps.map((step) => (
        <Text style={styles.text} key={step}>{step}</Text>
      ))}
      
      </View>
      
       
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 250,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    
    
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
    borderWidth:1,
    borderColor:'black',
    borderRadius:6,
    padding:4,
    margin:2,
    backgroundColor:'red'
    
  },
});

export default MealDetailsScreen;
