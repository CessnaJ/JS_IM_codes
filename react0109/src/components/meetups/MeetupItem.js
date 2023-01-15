import { useContext } from "react"
// 컴포넌트와 컨텍스트를 연결해주는 Hook임.

import Card from "../ui/Card"
import classes from './MeetupItem.module.css'
import FavoritesContext from "../../store/favorites-context"

function MeetupItem(props) {
    const favoriteCtx = useContext(FavoritesContext)
    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id)


    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id)
        } else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            })
        }
    }
    
    // 이 MeetupItem이 context의 일부인지 아닌지에 따라 로직달라짐.(toggle)

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                </div>

                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                <button>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
                {/* 버튼 누르면, favorites arr에 들어가고(토글형), 버튼상태또한 변하게. */}
                </div>
            </Card>
        </li>
    )
}
