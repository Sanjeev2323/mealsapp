import { FlatList ,StyleSheet} from "react-native";
import { CATEGORIES } from "../data/dummy-data";

import CategoryGrid from  "../components/categorygrid";



function CategoryScreen({navigation}) {

  function renderCategory(itemData){

    function onPressHandler(){
      navigation.navigate('MealsOverview',{ categoryId:itemData.item.id});
  
    }
  
      return (<CategoryGrid title={itemData.item.title}
        color={itemData.item.color}  onPress={onPressHandler}
      />)
  
  }
  

  return (<FlatList data={CATEGORIES} 
  keyExtractor={(item)=>item.id}

   renderItem={renderCategory}
   numColumns={2} />);
}

export default CategoryScreen;
