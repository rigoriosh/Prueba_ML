import { useState } from "react";
import { DataContext } from "./context/DataContext";
import { AppRouter } from "./routers/AppRouter";

function App() {  
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState({});
  const [search, setSearch] = useState('');
  const store = {data, setData, detail, setDetail, search, setSearch}
  return (
    <>
      <DataContext.Provider value={store}>
        <AppRouter/>
      </DataContext.Provider>
    </>
  );
}

export default App;
