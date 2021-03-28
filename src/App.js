import { useState } from "react";
import { DataContext } from "./context/DataContext";
import { AppRouter } from "./routers/AppRouter";

function App() {  
  const [data, setData] = useState([]); // en este use se almacena la información realizada en la consulta segun una palabra.
  const [detail, setDetail] = useState({}); // en este use se almacena la información del detalle de un producto consultado atraves de la API por Id del producto.
  const [search, setSearch] = useState(''); // este use se utiliza pala tener la palabra que el usuario digitó y con la cual se realizó la consulta incial.
  const store = {data, setData, detail, setDetail, search, setSearch} // store que maneja datos de forma global y poder ser utilizados en diferentes vistas, a travez del useContext
  return (
    <>
      <DataContext.Provider value={store}>
        <AppRouter/> {/* Rout que administra las visualización de las vistas */}
      </DataContext.Provider>
    </>
  );
}

export default App;
