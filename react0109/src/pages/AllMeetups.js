import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([])

    // useEffect는 첫 arg로 함수 받음. 둘째 arg로 의존형 arr를 받음(arr of dependency).
    useEffect( () => {
        setIsLoading(true);
        fetch(
            'https://react-getting-started-5af42-default-rtdb.firebaseio.com/meetups.json'
        ).then(response => {
            return response.json();
            
        }).then(data => {
            setIsLoading(false);
            setLoadedMeetups(data);
            
        })
    
        if (isLoading){
            return (<section>
                <p>Loading</p>
            </section>)
        }
    }, [])
    

    
    

    return (<section>
        <h1>All meetups</h1>
        <MeetupList meetups={loadedMeetups}></MeetupList>
        {/* meetups라는 prop이름으로 전달함. */}
    </section>)

}

export default AllMeetupsPage