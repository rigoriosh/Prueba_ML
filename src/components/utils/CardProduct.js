import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import ic_shipping from '../../Assets/ic_shipping.png';
import { DataContext } from '../../context/DataContext';
import { doQueryApi } from '../../uitilsLogic/utilsLogis';


/* Componente que recibe un obj con la información del un producto a ser renderizado */
export const CardProduct = ({item, history}) => {
    
    const {setDetail} = useContext(DataContext); // trae el setDetail del store para guardar el detalle del producto si es seleccionado

    /* esta función captura el id del producto seleccionado y realiza la consulta para traer el detalle de información del producto,
        luego de tener la información navega a la vista de detalle producto para ser mostrada */
    const goSearch = async (idprouduct) => {       
        const dataSearch = await doQueryApi('/items/:id', idprouduct); // realiza la consulta segun el id        
        setDetail(dataSearch.data); //almacena en el store la data detalle producto retornada desde el back      
        history.replace(`${idprouduct}`); //  navega a la vista detalle producto
    }

    return (
        
        /* Tarjeta donde se visualiza cada producto */
        <div onClick={()=>{goSearch(item.id)}} className="card cardProduct" > {/* capura el click de cliente para ir al detalle de este producto */}
            
            <div className="row g-0">
                <div className="col-md-4 align-self-center"> {/* div para visualizar la imagen del producto */}
                    <img src={item.picture} alt="..." className="img_1_ml" />
                </div>
                <div className="col-md-6 align-self-center"> {/* contendor donde se visualiza la información resumen del pruducto */}
                    <div className="card-body">
                        <div className="row mb_1_ml">
                            <div className="col-md-4 maxWidthML">
                                <h5 className="card-title price_cp">$ {item.price.amount}</h5> {/*  El precio */}
                            </div>
                            <div className="col-md-8">
                                {
                                    (item.free_shipping) && <img src={ic_shipping} alt="..." /> /* si tiene envio gratis renderiza la img */
                                }
                                
                            </div>
                        </div>
                        <p className="card-text p_cp" >{item.title}</p>    {/* titulo de la imagen */}                       
                    </div>
                </div>
                <div className="col-md-2 align-self-center text-start">
                        <p className="card-text"><small className="text-muted small_cp" >{item.price.currency}</small></p> {/* Ubicación de donde es el producto */}
                </div>
            </div>
        </div>
    )
}

/* Tipado de las propiedades de entrada del componente */
CardProduct.prototype = {
    item: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}
