import React from "react";
import { Form } from "./Form";
import TableData from "./TableData";

export function Products() {
  
  return (
    <div id="product-master">
      <div className="row">
        <div className="col-sm-12 col-lg-8">
          <div className="d-flex flex-wrap flex-stack pb-7">
            <div className="d-flex flex-wrap align-items-center my-1">
              <h3 className="fw-bolder me-5 my-1">0 items of product</h3>
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
         
          <div className="product-items ">
            <TableData/>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4">
          <Form />
        </div>
      </div>
    </div>
  );
}
