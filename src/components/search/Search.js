import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';


import lupa from '../../Assets/ic_Search.png';
import { DataContext } from '../../context/DataContext';
import { doQueryApi } from '../../uitilsLogic/utilsLogis';


export const Search = ({history}) => {

    
    const location = useLocation();
    const {search=''} = queryString.parse(location.search );
    const [inputSearch, setInputSearch] = useState(search);  
    
    const {setData, setSearch} = useContext(DataContext);
    
    
    const goSearch = async (e) => {
        e.preventDefault();
        if(inputSearch !== ''){
            const dataSearch = await doQueryApi('/sites/MLA/search/', inputSearch);
            setData(dataSearch);
            setSearch(inputSearch);
            history.replace(`/items/?search=${inputSearch}`);           
        }
    }



    return (
        
            <div className=" barra ">                
                <div className="row p-2 justify-content-center">
                    <div className="icon_Search col-2">
                        <a className="nav-logo1" href="./" >.</a>
                    </div>
                    <div className="col-8 col_search">
                        <form onSubmit={goSearch}>
                            <div className="input-group ">      
                                <input onChange={(e)=>setInputSearch(e.target.value)}                                     
                                    type="text" 
                                    className="form-control input_search bgc_ml" 
                                    value={inputSearch}
                                    name="search"
                                    placeholder="Buscar productos, marcas y más…"                                     
                                />
                                <button className="btn bgc_ml" type="submit" id="button-addon2">
                                    <img src={lupa} alt=""/>
                                </button>                                                
                            </div>
                        </form>                 
                    </div>   
                    <div className="col-2"></div>             
                </div>
            </div>
       
    )
}
