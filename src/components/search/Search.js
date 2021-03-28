import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types'


import lupa from '../../Assets/ic_Search.png';
import { DataContext } from '../../context/DataContext';
import { doQueryApi } from '../../uitilsLogic/utilsLogis';


export const Search = ({history}) => {

    
    const location = useLocation(); // use para captura el string colocado en la url
    const {search=''} = queryString.parse(location.search ); //con queryString se camptura los parametros por url
    const [inputSearch, setInputSearch] = useState(search);  // state del input el cual tiene el nombre search, donde los usuarios digitaran los productos a consultar
    
    // se traen dos sets del store a traves del useContext para ser modificados, setData con la consulta incial y setSearch con la palabra que el usuario digitó
    const {setData, setSearch} = useContext(DataContext); 
    
    const goSearch = async (e) => { // función que se ejecuta cuando el evento del enter o click en la caja de busqueda es activado
        e.preventDefault(); // evita el recargue de la pagina
        if(inputSearch !== ''){ // verificar que exista una palabra en la caja de busqueda (CB)
            // en dataSearch se almacena el resultado de la consulta que e ejecuto en la función doQueryApi, la cual recibe la parte de la url a completar  y recibe 
            // la palabra (inputSearch) que el usuario dijito en la CB
            const dataSearch = await doQueryApi('/sites/MLA/search/', inputSearch);
            setData(dataSearch); //almacena en el store la data llegada desde el back
            setSearch(inputSearch); //almacena en el store la palabra (inputSearch) que el usuario dijito en la CB
            history.replace(`/items/?search=${inputSearch}`); // navega a la vista de detalles para renderizar la data llegada desde el back          
        }
    }

    return (
            /* renderiza toda la caja de busqueda */
            <div className=" barra ">                
                <div className="row p-2 justify-content-center">
                    <div className="icon_Search col-2"> {/*  logo de ML */}
                        <a className="nav-logo1" href="./" >.</a> {/*  enlace a la vista inicial */}
                    </div>
                    <div className="col-8 col_search">
                        <form onSubmit={goSearch}> {/* formulario con el metodo goSearch para el submit */}
                            <div className="input-group ">      
                                <input onChange={(e)=>setInputSearch(e.target.value)} /* imput de la CB y cuado hay cambio modifica el useState setInputSearch*/                                    
                                    type="text" 
                                    className="form-control input_search bgc_ml" 
                                    value={inputSearch} /* inputSearch useState donde se aloja la palabra que usuario dijitó */
                                    name="search"
                                    placeholder="Buscar productos, marcas y más…"                                     
                                />
                                <button className="btn bgc_ml" type="submit" id="button-addon2"> {/*  btn con img de la lupa que sirve para activar el submit */}
                                    <img src={lupa} alt=""/>
                                </button>                                                
                            </div>
                        </form>                 
                    </div>   
                    <div className="col-2"></div>    {/* solo ayuda a centrar la CB  */}         
                </div>
            </div>
       
    )
}
/* Tipado de las propiedades de entrada del componente */
Search.prototype = {
    history: PropTypes.string.isRequired
}

