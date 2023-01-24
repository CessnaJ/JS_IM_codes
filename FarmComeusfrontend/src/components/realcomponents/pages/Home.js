import { useState } from "react";
import Navigation from "../common/Navigation";
import Sidemenu from "../common/SideMenu";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navigation>
      <Sidemenu
        className={menuOpen ? "active" : ""}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      ></Sidemenu>
      {/* 아래는 진짜 컴포넌트들 */}
    </div>
  );
}

export default Home;
