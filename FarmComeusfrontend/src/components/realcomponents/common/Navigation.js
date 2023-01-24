function Navigation(props) {
  return (
    <div>
      <a>logo home button</a>
      <a>search button</a>
      <image
        src="햄버거버튼 모양 이미지소스"
        alt="menu button"
        onClick={() => {
          props.setOpenMenu(!props.menuOpen);
        }}
      ></image>
    </div>
  );
}

export default Navigation;
