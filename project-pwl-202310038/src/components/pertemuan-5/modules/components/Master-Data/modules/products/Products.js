import React, { useEffect, useState } from "react";
import { Form } from "./Form";
import TableData from "./TableData";
import CallAxios from '../../../Library/CallAxios';
import LoadingSpin from "../../../../../layouts/components/loadings/LoadingSpin";
import AlertInfo from "../../../../../layouts/components/alerts/AlertInfo";

export function Products() {
  
  const [paramProduct, setParamProduct] = useState({
    loading: false,
    data: [],
    message: "",
  });

  const GET_ALL_PRODUCT = () => {
    setParamProduct({...paramProduct, loading: true});
    const postData = {
      method: "GET",
      url: "http://localhost:8080/api/products",
      headers: {'Content-Type': 'application/json'}
    };
    CallAxios(postData).then((response) => {
      if(response.error) {
        setParamProduct({...paramProduct, loading: false, message: response.error});
      } else {
        let results = response.data;
        console.log(results)
        if(results) {
          setParamProduct({...paramProduct, loading: false, message: "", data:results})
        } else {
          setParamProduct({...paramProduct, loading: false, message: "No record found"});
        }
      }
    })
  };

  useEffect(() => {
    GET_ALL_PRODUCT();
  },[]);

  return (
    <div id="product-master">
      <div className="row">
        <div className="col-sm-12 col-lg-8">
          <div className="d-flex flex-wrap flex-stack pb-7">
            <div className="d-flex flex-wrap align-items-center my-1">
              <h3 className="fw-bolder me-5 my-1">{Object.values(paramProduct.data).length} items of product</h3>
            </div>
            <div className="d-flex flex-wrap my-1">
              <div className="d-flex my-0">
                <div className="input-group me-3">
                  <input
                    type="text"
                    name="search"
                    className="form-control"
                    placeholder="Search here"
                    autoComplete="off"
                  />
                  <span className="input-group-text">
                    <i className="bi bi-search"></i>
                  </span>
                </div>
                <select name="sort" className="form-select">
                  <option value="">Sort by</option>
                  <option value="">Name</option>
                  <option value="">Price</option>
                </select>
              </div>
            </div>
          </div>
         
          {(paramProduct.loading) ? <LoadingSpin /> : ""}
          {(paramProduct.message) ? <AlertInfo message={paramProduct.message.name + ". " + paramProduct.message.message} variant="danger" /> : ""}

          <div className={"product-items "+((paramProduct.loading) ? "d-none" : "")}>
            <TableData data={paramProduct.data} />
          </div>
        </div>
        <div className="col-sm-12 col-lg-4">
          <Form getProduk={GET_ALL_PRODUCT} />
        </div>
      </div>
    </div>
  );
}
