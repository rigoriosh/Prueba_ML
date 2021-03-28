import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DataContext } from '../../context/DataContext';
import { getBreadcrumb } from '../../uitilsLogic/utilsLogis';
import { Breadcrumb } from './Breadcrumb';


export const CardDetailProduct = ({history}) => {
    let stateProduct = 'Nuevo'; // variable para visualizar si el producto es nuevo o usado
    let breadcrumb = ''; // variable para renderizar el breadcrumb

    const {detail, search} = useContext(DataContext);    // trae del store detail (info con el detalle del producto) y search (palabra q el cliente digitó)
    const {item} = detail;  //  saca la información del detalle del producto
    if (!item) { // si no hay información en item redirecciona a la vista inicial
        history.replace('/');
    }else{
        if(item.condition !== 'new') stateProduct = 'Usado'; // ajusta la variable stateProduct para mostrar el estado del producto
        breadcrumb = getBreadcrumb(detail.categories); // envia las categorias para que construlla el breadcrumb y lo retorne para ser renderizado
    }

    return (
        
        <div className="card container  cardetailProduct">            
            <Breadcrumb history={history} path={`/items/?search=${search}`} breadcrumb={breadcrumb}/> {/* Componente que renderiza el breadcrumb */}
            <div className="row g-0">
                <div className="col-md-8 align-self-center text-center"> {/* Muestra la imagen del producto */}
                    <img src={item?.picture} alt="..." />
                </div>
                <div className="col-md-4 ">
                    <div className="card-body">
                        <div className="row">                                
                                <h6> {stateProduct} - {item?.sold_quantity} Vendidos</h6> {/* renderiza estado y cantidad de ventas del producto*/}
                                <h4> {item?.title}</h4> {/* Nombre del producto */}
                                <h2> $ {item?.price.amount}</h2> {/* precio del producto */}
                                <button className="btn btn-primary pt-2 pb-2" >Comprar</button> {/* boton para ir al carrito de compras */}
                        </div>                                           
                    </div>
                </div>                
            </div>
            <h4 className="fz_5_ml mb_1_ml">Descripción del producto</h4>
            <p className="card-text"><small className="text-muted p_cdp_ml">{item?.description}</small></p>{/* renderiza el texto que describe mas al producto */}
        </div>        
    )
}


/* Tipado de las propiedades de entrada del componente */
CardDetailProduct.prototype = {
    history: PropTypes.object.isRequired
}