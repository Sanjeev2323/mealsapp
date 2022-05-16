import {View,Text, StyleSheet} from 'react-native';


function MealDetails({duration,complexity,affordability}){
    return (
<View style={styles.textContainer}>
          <Text style={styles.details}>{duration}m</Text>
          <Text style={styles.details}>{complexity.toUpperCase()}</Text>
          <Text style={styles.details}>{affordability.toUpperCase()}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      details: {
        fontSize: 14,
        fontWeight: "bold",
        padding: 8,
       
      },

})

export default MealDetails;