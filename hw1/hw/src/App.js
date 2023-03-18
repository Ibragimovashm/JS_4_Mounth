import "./App.css";
import Header from "./components/Header/Header";
import Buttons from "./components/Buttons/Buttons";
import Footer from "./components/Footer/Footer";
import { Text } from "./components/Text/Text";
import { Info } from "./components/Info/Info";
function App() {
  const myFunction = () =>{
    console.log("hello my friend");
  }
  return (
    <div className="App">
      <Header />
      {/* <button onClick={myFunction}>
        Start
      </button> */}
      <Text />
      <Info/>
      <Buttons myFunction={myFunction}/>
      <Footer />
    </div>
  );
}

export default App;
