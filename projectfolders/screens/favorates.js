import {View,Text ,StyleSheet}  from 'react-native'
import { useContext } from 'react';
import MealsList from '../components/mealsList';
import { MEALS } from '../data/dummy-data';

import { FavouriteContext } from '../store/context/FavouriteContext';

function Favourite(){

    const FavouriteCxt=useContext(FavouriteContext);

    const favMeals=MEALS.filter((meal)=>FavouriteCxt.ids.includes(meal.id));

    if(favMeals.length===0){
        return(
            <View  style={styles.container}>
                <Text style={styles.textContainer}>there are no favourites</Text>
            </View>

        );
    }
    return (
        <MealsList items={favMeals}/>
    );
}

export default Favourite;

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    textContainer:{
        fontSize:18,
        fontWeight:'bold'
    }
})