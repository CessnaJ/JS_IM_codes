import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  // dispatch를 포인터화 시켜서 Dispatch객체를 가져온다.

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  // form이랑 다르게 HTTPrequest를 보내지는 않음. 발동되면 event를 받아서 preventDefault하는게 아니니까 param은 비움.
  // logout 리듀서 실행해서 액션객체를 받고, dispatch로 보내버림

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
              {/* 연결 */}
            </li>
          </ul>
        </nav>
      )}
      {/* 로그인여부에 따라 nav바 렌더링결정 */}
    </header>
  );
};

export default Header;
