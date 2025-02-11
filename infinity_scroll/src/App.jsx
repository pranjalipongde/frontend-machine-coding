import { useCallback, useState } from "react";
import "./App.css";
import InfiniteScroll from "./components/InfiniteScroll";

function App() {
  const [query, setQuery] = useState("");

  const handleInput = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const getData = useCallback((query, pageNumber) => {
    return new Promise((resolve, reject) => {
      try {
        fetch('https://openlibrary.org/search.json' + new URLSearchParams({
          q: query,
          page: pageNumber
      }))
      } catch (error) {
        
      }
      
      
    })
  }, [])

  return (
    <>
      <input type="text" value={query} onChange={handleInput} />
      <InfiniteScroll renderListItem ={ } getData={ } listData={ } query={ } />
    </>
  );
}

export default App;
