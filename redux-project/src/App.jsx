import ResultGrid from "./Components/ResultGrid";
import SearchBar from "./Components/SearchBar";
import Tabs from "./Components/Tabs";

const App = () => {


  return (
    <>
      <div className="h-screen text-white bg-gray-950" >
        <SearchBar />
        <Tabs />
        <ResultGrid />
      </div>

    </>
  )
};

export default App;
