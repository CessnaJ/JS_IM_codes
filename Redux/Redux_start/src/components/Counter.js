import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
// 이렇게 컴포넌트와 관련된 파일대로 관리를 하면 편해짐.

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment(10));
  };
  // 객체가 이렇게 전달될것임.
  // {type: uniqueidentifier, payload:10} 그래서 store에서 변수명을 payload로 고정시켜써야함.

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.showCounter);
  const auth = useSelector((state) => state.auth);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementHandler}>Increse by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
