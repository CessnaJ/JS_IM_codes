import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
})

// 1. 이 조작하는 함수 이름 자체를 내보냄.
export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([])

    function addFavoriteHandler(favoritesMeeup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoritesMeeup)
        })
    }

    function removeFavoritesHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
        })
    }


    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoritesHandler,
        itemIsFavorite: itemIsFavoriteHandler        
    }
    //context가 useState, handler함수에 접근할 수 있게 해줌.
    
    return (<FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>)
}

export default FavoritesContext
// 2. context객체 자체를 내보냄, 함수랑 다름. 
// 핸들러함수를 밖에서도 호출할거고, context도 밖에서 접근하기 위해