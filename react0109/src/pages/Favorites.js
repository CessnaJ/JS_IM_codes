import { useContext } from "react"

import FavoritesContext from "../store/favorites-context"
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);
    //이렇게 객체로 가져오니, context snapshot을 얻을 수 있음.

    //favorites없을때 대체이미지 있어야 좋겠지?
    let content;
    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You got no favorites yet. Start adding some?</p>
    } else {
        content = <MeetupList meetups = {favoritesCtx.favorites}/>
    }
    // HTML 태그를 변수에 지정하는것도 이상하지만, 사실 return 하는것도 이미 이상했음.
    // JSX 코드를 value가 필요한곳 어디에든 박을 수 있음. 
    // arr안에 넣어도 되고, 변수/return에도 OK

    return (
    <section>
        <h1>My favorites</h1>
        {content}
    </section>
    )

}

export default FavoritesPage