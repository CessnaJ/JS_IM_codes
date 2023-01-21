import "./App.css";
import KakaoLogin from "./components/login/kakaoLogin";
import Postcode from "./components/postcode/postcodeInput";
import Button from "./components/realcomponents/common/Button";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Postcode />
      <KakaoLogin />
      <Button innerText="시험해보자" />
    </div>
  );
}

export default App;
