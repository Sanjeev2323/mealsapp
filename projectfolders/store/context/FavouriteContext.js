import {createContext, useState} from 'react';

export const FavouriteContext=createContext({
    ids:[],
    addFavourite:(id)=>{},
    removeFavourite:(id)=>{}
})

function  FavouriteContextProvider({children}){

    const [FavouriteMealIds,setFavouriteMealIds]=useState([]);

    function addFavourite(id){
     
        setFavouriteMealIds((currentFavIds)=>[...currentFavIds,id])
    }
  
    function removeFavourite(id){
        setFavouriteMealIds((currentFavIds)=>currentFavIds.filter((mealId)=>mealId!==id))

    }

    const value={
        ids:FavouriteMealIds,
        addFavourite:addFavourite,
        removeFavourite:removeFavourite
    }
    return <FavouriteContext.Provider value={value} >{children}</FavouriteContext.Provider>
}

export default  FavouriteContextProvider;