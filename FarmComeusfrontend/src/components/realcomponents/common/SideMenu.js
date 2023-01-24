import userSlice from "../../../store/userSlice";
import { Link } from "react-router-dom";
// 이쪽 다시.. 구독해서 user정보 있으면 프로필보여주는식.

function Sidemenu(props) {
  return (
    <div className="navContainer">
      <div>유저프로필 혹은 로그인버튼</div>
      <div>
        {/* 클릭시 색 변하는 애니메이션 0.5초간 들어가고 페이지 변화 */}
        <Link to="/livestore">
          <div>
            <image src="" alt=""></image>Live스토어
          </div>
        </Link>
        <Link to="/store">
          <div>
            <image src="" alt=""></image>스토어
          </div>
        </Link>
        <Link to="/cart">
          <div>
            <image src="" alt=""></image>장바구니
          </div>
        </Link>
        <Link to="/mypage">
          <div>
            <image src="" alt=""></image>마이페이지
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidemenu;
