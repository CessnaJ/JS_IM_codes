import "./App.css";
import KakaoLogin from "./components/login/kakaoLogin";
import Postcode from "./components/postcode/postcodeInput";

function App() {
  return (
    <div className="App">
      <Postcode />
      <KakaoLogin />
    </div>
  );
}

export default App;
