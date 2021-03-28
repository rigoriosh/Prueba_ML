import React, { useContext } from 'react'
import ic_shipping from '../../Assets/ic_shipping.png';
import { DataContext } from '../../context/DataContext';
import { doQueryApi } from '../../uitilsLogic/utilsLogis';

export const CardProduct = ({item, history}) => {
    
    const {setDetail} = useContext(DataContext); 

    const goSearch = async (idprouduct) => {       
       
        const dataSearch = await doQueryApi('/items/:id', idprouduct);
        console.log(dataSearch)
        setDetail(dataSearch.data);      
        history.replace(`${idprouduct}`);        
    }

    

    return (
        <div onClick={()=>{goSearch(item.id)}} className="card cardProduct" >
            
            <div className="row g-0">
                <div className="col-md-4 align-self-center">
                    <img src={item.picture} alt="..." className="img_1_ml" />
                </div>
                <div className="col-md-6 align-self-center">
                    <div className="card-body">
                        <div className="row mb_1_ml">
                            <div className="col-md-4">
                                <h5 className="card-title price_cp">$ {item.price.amount}</h5>
                            </div>
                            <div className="col-md-8">
                                {
                                    (item.free_shipping) && <img src={ic_shipping} alt="..." />
                                }
                                
                            </div>
                        </div>
                        <p className="card-text p_cp" >{item.title}</p>                           
                    </div>
                </div>
                <div className="col-md-2 align-self-center text-start">
                        <p className="card-text"><small className="text-muted small_cp" >{item.price.currency}</small></p>
                </div>
            </div>
        </div>
    )
}
