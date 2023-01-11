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
            const meetups = [];
            
            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup)
            }
            // 파이어베이스가 객체안에 객체가 들어어있는식으로 배열을 반환해줄건데,
            // 현재 setLoadedMeetups에 data를 그대로 넣기때문에 
            // 배열형태로 바꿔줘야한다.
            // 아래 <MeetupList meetups={loadedMeetups}>로 들어간 prop에 객체형태가 들어가면
            // 해당 커스텀 태그안에서 map함수( arr funct가 작동을 못함. )
            
            setIsLoading(false);
            setLoadedMeetups(meetups);
            // 위에서 배열형태로 바꾼거 넣어주는것. ( arr안에 객체들이 들어있다. )
            
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