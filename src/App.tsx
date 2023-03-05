import "./assets/styles/app.css";
import Creation from "./components/Creation";
import Header from "./components/Header";
import ShowOff from "./components/ShowOff";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <ShowOff />
        <Creation />
      </main>
    </>
  );
}

export default App;
