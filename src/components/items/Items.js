import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { getBreadcrumb } from "../../uitilsLogic/utilsLogis";
import { Search } from "../search/Search";
import { Breadcrumb } from "../utils/Breadcrumb";
import { CardProduct } from "../utils/CardProduct";

export const Items = ({ history }) => {
  const { data } = useContext(DataContext);
  let breadcrumb = "";
  let items = [];
  if (data.length === 0) {
    history.push("/");
  } else {
    items = data.data.items;

    breadcrumb = getBreadcrumb(data.data.categories);
  }
  return (
    <>
      <Search history={history} />
      <div className="container pb_ml" >
        <Breadcrumb history={history} path='/' breadcrumb={breadcrumb}/>
        {items.map((item) => (
          <CardProduct key={item.id} item={item} history={history} />
        ))}
      </div>
    </>
  );
};
