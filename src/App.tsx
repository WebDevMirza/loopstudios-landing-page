import "./assets/styles/app.css";
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
      </main>
    </>
  );
}

export default App;
