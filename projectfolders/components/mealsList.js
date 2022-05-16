import {View,FlatList,StyleSheet} from 'react-native';
import MealItem from './mealItem';

function MealsList({items}){
    function renderMeals(itemData){
        const item=itemData.item;
  
         const mealItemProps={
             id:item.id,
             title:item.title,
             imageUrl:item.imageUrl,
             duration:item.duration,
             complexity:item.complexity,
             affordability:item.affordability
         }
         
         return (
             <MealItem {...mealItemProps} />
         );
     }

    return (
        <View   style={styles.container1}>
        
        <FlatList data={items} 
        keyExtractor={(item)=>item.id} 
        renderItem={renderMeals} />
    </View>
    );
}

export default MealsList;


const styles=StyleSheet.create({
    container1:{
    flex:1,
    padding:16
    }
})