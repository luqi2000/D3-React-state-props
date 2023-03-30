import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter.jsx";
import MyNav from "./components/MyNav";

import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import fantasy from "./books/fantasy.json";

function App() {
  return (
    <div className="App">
      <MyNav first="Home" second="About" third="Browser" />
      <Welcome title="EpiBooks" subtitle="Benvenuto" />

      <BookList books={fantasy} />
      <AllTheBooks />
      <MyFooter email="luqmanmohammad@gmail.com" />
    </div>
  );
}

export default App;
