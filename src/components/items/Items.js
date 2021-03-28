import React, { useContext } from "react";
import PropTypes from 'prop-types'
import { DataContext } from "../../context/DataContext";
import { getBreadcrumb } from "../../uitilsLogic/utilsLogis";
import { Search } from "../search/Search";
import { Breadcrumb } from "../utils/Breadcrumb";
import { CardProduct } from "../utils/CardProduct";

export const Items = ({ history }) => {
  const { data } = useContext(DataContext);
  let breadcrumb = ""; //variable en donde se almacenará el texto del breadcrumb
  let items = []; // variable en donde se alojara los ítems devueltos por el back y servira para ser rendirizados en la vista
  if (data.length === 0) { // verifica que la variable data del store tenga información de lo contrario redirecciona a la vista inicial
    history.push("/");
  } else {
    items = data.data.items; // capura la data a ser renderizada
    breadcrumb = getBreadcrumb(data.data.categories); // metodo que construlle el brreadcrum segun las categorias provista por el back
  }
  return (
    <>
      <Search history={history} /> {/* Componente caja de busqueda */}
      <div className="container pb_ml" >
        {/* Componente breadcrumb el cual recibe el history y un path para hacer redirección cuando se oprima, y el correspondiente breadcrumb a ser rendirizado*/}
        <Breadcrumb history={history} path='/' breadcrumb={breadcrumb}/> 
        {/* Lógica par renderizar los items devueltos por el back, recibe un item con la data (item) y el history para la navegación */}
        {items.map((item) => (
          <CardProduct key={item.id} item={item} history={history} />
        ))}
      </div>
    </>
  );
};
/* Tipado de las propiedades de entrada del componente */
Items.prototype = {
  history: PropTypes.object.isRequired
}