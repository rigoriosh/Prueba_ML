import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext';
import { getBreadcrumb } from '../../uitilsLogic/utilsLogis';
import { Breadcrumb } from './Breadcrumb';

export const CardDetailProduct = ({history}) => {
    let stateProduct = 'Nuevo';
    let breadcrumb = '';

    const {detail, search} = useContext(DataContext);    
    const item = detail.item;    
    if (!item) {
        history.replace('/');
    }else{

        if(item.condition !== 'new') stateProduct = 'Usado';
        breadcrumb = getBreadcrumb(detail.categories);       
    }

    
    
    return (
        
        <div className="card container  cardetailProduct">            
            <Breadcrumb history={history} path={`/items/?search=${search}`} breadcrumb={breadcrumb}/>
            <div className="row g-0">
                <div className="col-md-8 align-self-center text-center">
                    <img src={item?.picture} alt="..." />
                </div>
                <div className="col-md-4 ">
                    <div className="card-body">
                        <div className="row">                                
                                <h6> {stateProduct} - {item?.sold_quantity} Vendidos</h6>
                                <h4> {item?.title}</h4>
                                <h2> $ {item?.price.amount}</h2>
                                <button className="btn btn-primary pt-2 pb-2" >Comprar</button>                            
                        </div>                                           
                    </div>
                </div>                
            </div>
            <h4 className="fz_5_ml mb_1_ml">Descripción del producto</h4>
            <p className="card-text"><small className="text-muted fz_6_ml mb_1_m">{item?.description}</small></p>
        </div>        
    )
}
