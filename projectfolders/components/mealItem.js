import { View, Text, Pressable, StyleSheet, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import MealDetails from "./mealdetails";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  function SelectMealHandler() {
    navigation.navigate("MealDetails", {
      MealId: id,
    });
  }
  return (
    <View style={styles.mealContainer}>
      <Pressable android_ripple={{color:'#ccc'}} onPress={SelectMealHandler}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.imageContainer} />
          <Text style={styles.titleContainer}>{title}</Text>
        </View>
        <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealContainer: {
    margin: 16,
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 8,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  titleContainer: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    padding: 8,
  }
});

export default MealItem;
