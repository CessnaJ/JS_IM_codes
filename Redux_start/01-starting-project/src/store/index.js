import { createStore } from 'redux';


//로직이 존재하는 리듀서함수.
const counterReducer = (state={counter:0}, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    };

    if (action.type === 'decrement') {
        return {
            counter: state.counter -1
        }
    };

};

const store = createStore(counterReducer)
//스토어에 리듀서함수가 들어감. -> 얘가 state를 묶은 객체를 return하니까.

// 여기서 정의하고, 로직에 따라 진행하는건 쓰는데, 
// 구독하는거랑 dispatch로 리듀서 발동시키는건 각 컴포넌트에서 진행.
export default store;
//스토어 객체를 밖에서 쓸 수 있게.