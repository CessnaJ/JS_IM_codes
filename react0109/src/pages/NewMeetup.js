import NewMeetupForm from "../components/meetups/NewMeetupForm"
import { useNavigate } from 'react-router-dom'

function NewMeetupPage() {
    const history = useNavigate()
    // 브라우저의 history를 조작하는것임.

    function addMeetupHandler (meetupData) {
        fetch(
            'https://react-getting-started-5af42-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            ).then(() => {
                history.replace('/')
                //다른 메뉴로 이동하는 method. history.push()는 이전페이지로 가는것.
                //뒤로가기 버튼 비활성화함.
            });
        
    }

    return (
    <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>

    </section>)

}

export default NewMeetupPage