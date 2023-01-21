import classes from "./Button.module.css";

function Button(props) {
  const clickHandler = () => {
    console.log("clicked");
  };

  return (
    <div className={classes.button} onClick={clickHandler}>
      <div className={classes.buttontext}>{props.innerText}</div>
    </div>
  );
}

export default Button;
