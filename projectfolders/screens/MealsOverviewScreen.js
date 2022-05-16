import {useLayoutEffect} from 'react'

import { MEALS ,CATEGORIES} from '../data/dummy-data';
import {View,Text  ,FlatList} from 'react-native';
import MealItem from '../components/mealItem';
import MealsList from '../components/mealsList';


function MealsOverView({route, navigation}){
    const catId=route.params.categoryId;

   const displayMeals=MEALS.filter((MealItem)=>{
       return MealItem.categoryIds.indexOf(catId)>=0;
   })
useLayoutEffect(()=>{
   const categoryTitle=CATEGORIES.find((category)=>category.id==catId).title;
   navigation.setOptions({
       title:categoryTitle
   })},[catId,navigation]
   )

   return (
       <MealsList items={displayMeals}/>
   );
}

export default MealsOverView;