import {View,Text,Pressable,StyleSheet} from 'react-native';

function CategoryGrid({title,color,onPress}){
    return (
    <View style={[styles.gridItem,{backgroundColor:color}]}>
        <Pressable android_ripple={{color:'#ccc'}} style={styles.button} onPress={onPress} >
            <View style={styles.innerContainer}>
               <Text  style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>);
}

const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:12,
        elevation:4,
        backgroundColor:"white",
        
    },
    button:{
        flex:1
    },
    title:{
        fontWeight:"bold",
        fontStyle:'italic'
    
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default CategoryGrid;