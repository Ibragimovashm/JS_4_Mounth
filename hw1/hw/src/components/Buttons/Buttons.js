import buttonsCss from "./buttons.module.css"
const Buttons = ({myFunction}) => {
  return <button className={buttonsCss.btnStart} onClick={myFunction}>go</button>;
};
export default Buttons;
