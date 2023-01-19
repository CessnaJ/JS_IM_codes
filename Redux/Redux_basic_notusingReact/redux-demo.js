const redux = require('redux');

const counterReducer = (state = {counter:0}, action) => {
    if (action.type === 'increment'){
        return {
            counter: state.counter + 1,
        };
    };

    if (action.type === 'decrement') {
        return {
            counter: state.counter -1,
        };
    };

    return state
    // action의 type이 increment면, state의 counter속성을 1 더해주고,
    // 아니면 그대로. -> 그러니까 초기화때 increment가 안되어서 실행은 되지만 값은 변화없음
};

const store = redux.createStore(counterReducer);

console.log(store.getState());
// 최초 store 생성 뒤에, 로깅하는것임.
// 1이뜨네? 왜 1임? 최초값이 0인데, 함수 실행하면서 1이 올라가니까


const conterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState)
};// 이거는 정의만 한거임.

store.subscribe(conterSubscriber)
// 첫 출력은 여기서 옴.

store.dispatch({ type: 'increment' });
//새로운 액션을 발송하는 함수임. - dispatch함수를 통해 counterSubscriber를 발동
// type: 안에 변수값 넣지말고, 고유한 string을 넣어야함. 그래야 매번 발동때마다 반영됨.
// 초기화 이후에 dispatch가 들어가니까 1이 더해져서 2가 출력됨.
store.dispatch({ type: 'decrement' });