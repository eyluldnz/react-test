import Navbar from "./components/base/Navbar";
import  {Footer} from "./components/base/Footer";
import HomePage from "./components/pages/HomePage";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <Footer show={true}/>
    </div>
  );
}

export default App;
