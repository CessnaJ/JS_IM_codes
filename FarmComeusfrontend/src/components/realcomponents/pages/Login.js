import Button from "../common/Button";
import classes from "./Login.module.scss";
import { Link } from "react-router-dom";
import KakaoLogin from "../../login/kakaoLogin";

function Login() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navigation>
      <Sidemenu
        className={menuOpen ? "active" : "closed"}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      ></Sidemenu>
      {/* 궁금증 - className 넣어주면 추가되는건지 아니면 아예 덮어서 내가 지정한 1개만 들어가는건지 */}
      {/* 아래는 진짜 컴포넌트들 */}
      {/* 사이에 공백 만들어주고.. */}

      <div>
        <h1>로그인</h1>
        <div>
          {/* 얘는 간격이 같으니 플렉스로 잡아줌. */}
          <input>id:</input>
          <input>pw:</input>
          <Button className="" innerText="사용자로그인" />
          <Button className="" innerText="카카오로그인" />
        </div>

        <div>
          <p>혹시 회원이 아니신가요?</p>
          <div>라인 어떻게 넣지?</div>
        </div>

        <div>
          <Link to="/signup">
            <image></image>
          </Link>
          {/* 일반 회원가입 signup */}

          <KakaoLogin />
        </div>
      </div>
    </div>
  );
}

export default Login;
