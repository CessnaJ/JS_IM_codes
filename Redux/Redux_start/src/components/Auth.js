import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  // dispatch함수를 포인터로 실행하기 위해서 일단 변수로 저장해서 받아옴

  const loginHandler = (event) => {
    event.preventDefault();
    // 기본 이벤트를 받는다. 새로고침막기(HTTP Request막기)위해서
    // preventDefault하는게 목적임.
    dispatch(authActions.login());
    // 액션객체 생성하게 불러옴. 일단 여기서는 param안받으니 이렇게.
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
