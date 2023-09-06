import Navigation from "./components/Navigation";
import Page from "./pages/Page"
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Page data={data}/>
    </div>
  );
}

export default App;
