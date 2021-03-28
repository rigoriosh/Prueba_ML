import React from 'react';
import PropTypes from 'prop-types';

/*  Componente para renderizar el breadcrumb
    recibe: 
      - history y el path para hacer navegación cuando sea seleccionado por el cliente.
      - string del breadcrumb a mostrar
*/
export const Breadcrumb = ({history, path, breadcrumb}) => {
    return (
        <p onClick={() => history.replace(path)} className="breadcrumb">
          {breadcrumb}
        </p>
    )
}
/* Validación de las props de entrada al componente */
Breadcrumb.prototype = {
  history: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  breadcrumb: PropTypes.string.isRequired
}