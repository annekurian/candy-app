import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CandyList from "./components/CandyList";

function App() {
  return (
    <>
      <h1>
        <span className="pink">Can</span>
        <span className="purple">dil</span>
        <span className="pink">ici</span>
        <span className="purple">ous</span>
      </h1>
      <div className="row main-container">
        <CandyList />
      </div>
    </>
  );
}

export default App;
