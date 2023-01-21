// 아직 미완성
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Spinner from "../spinner";

const myServerURL = "myserverURL";
const optionalREST = "optionalURL";

function OAuth2RedirectHandler(props) {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(async () => {
    try {
      const postingAccessCode = await axios.post(myServerURL + optionalREST, {
        accesscode: code,
      });
      const gettingToken = await axios.get(myServerURL + "");
    } catch (err) {
      console.log(err);
    }
  }, []);

  return <Spinner />;
}

export default OAuth2RedirectHandler;
