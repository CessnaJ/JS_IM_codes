// 아직 미완성
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Spinner from "../spinner";
import qs from "qs";

const myServerURL = "myserverURL";
const optionalREST = "optionalURL";

function OAuth2RedirectHandler(props) {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  const data = qs.stringify({
    grant_type: "authorization_code",
    client_id: KAKAO_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: code,
    client_secret: KAKAO_CLIENT_ID,
  });

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
