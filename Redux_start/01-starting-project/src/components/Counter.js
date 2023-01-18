import { useSelector } from "react-redux";
// react-redux팀이 만든 useSelector 훅을 import
// useStore도 있지만 (직접 접근하는훅), 이게 더 쉬움.
// useSelector는 store가 관리하는 state부분을 자동선택해줌.

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  // state에서 추출하고싶어하는 데이터를 useSelector안에 넣어줌.
  // useSelector는 콜백함수를 받음(state를 받아서 state.counter를 return해주는 함수.)
  // 이건 자동 구독을 해줌. state의 해당 property가 바뀌면, 컴포넌트함수 자체가 재실행됨.

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
