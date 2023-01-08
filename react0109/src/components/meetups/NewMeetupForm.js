import { useRef } from 'react';
// ref 개념을 이렇게 사용! DOM객체에서 바로!
import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.prventDefault();
        // step1. 기본동작 차단. onSubmit에 이 동작을 넣음.

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        //useRef로 생성된 객체들은 .current속성을 가짐. 연결된 값이 있음.

        const meetupData = {
            title: enteredTitle,
            iamge: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };
        
        props.onAddMeetup(meetupData)
        
        

    }



    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                {/* onChange -> input바뀔때마다 콜백함수 발동!// ref프롭은 모든 곳에서 적용 */}
                </div>

                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>    
                </div>

                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="url" required id="address" ref={addressInputRef}/>    
                </div>

                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required rows='5' ref={descriptionInputRef}></textarea>    
                </div>

                <div className={classes.actions}>
                    <button>Add Meetup</button>
                    {/* type="button"으로 할 수도 있음. */}
                </div>
            </form>
        </Card>
        
    )
}

export default NewMeetupForm;