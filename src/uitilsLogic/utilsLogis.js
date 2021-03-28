import axios from "axios";

export const doQueryApi = async(endUrl, q) => {
    const url = `${process.env.REACT_APP_API_URL}${endUrl}`;    
    const resp = await axios.get(url, {
        params:{
            q
        }
    });
    return resp
}

export const getBreadcrumb = (categories) => {
    let breadcrumb = '';
    categories.forEach((category, i) => {
        breadcrumb += category;
        if (i + 1 < categories.length) breadcrumb += " > ";
      });

    return breadcrumb;
}