import axios from "axios";

export const doQueryApi = async(endUrl, q) => { // función async que recibe parte de la url a realizar la petición; el q es la palabra a consultar
    // process.env.REACT_APP_API_URL => dato almacenado en las variables de entorno .env (http://localhost:8888/api.mercadolibre.com) => donde se encuetra alojado el back
    const url = `${process.env.REACT_APP_API_URL}${endUrl}`;    
    const resp = await axios.get(url, {
        params:{
            q // se envia el query por los parámetros
        }
    });
    return resp
}

/* Función que construlle el breadcrumb, recibe el array de categories y devuelve un string. Se emplea en la vista de items y en la vista de detalle producto  */
export const getBreadcrumb = (categories) => {
    let breadcrumb = '';
    categories.forEach((category, i) => {
        breadcrumb += category;
        if (i + 1 < categories.length) breadcrumb += " > ";
      });

    return breadcrumb;
}