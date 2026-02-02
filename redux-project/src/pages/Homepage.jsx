import SearchBar from "../Components/SearchBar";
import Tabs from "../Components/Tabs";
import ResultGrid from "../Components/ResultGrid";
import { useSelector } from "react-redux";


const Homepage = () => {

  const { query, activeTab, results, loading, error } = useSelector((store) => store.search)
  

  return <div>
    
    <SearchBar />
 

    {query != '' ? <div>
      <Tabs />

      <ResultGrid />
    </div> : ""}


  </div>;
};

export default Homepage;
