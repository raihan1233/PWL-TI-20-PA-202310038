import React from "react";
import AlertInfo from "../../../../../layouts/components/alerts/AlertInfo";
export default function TableData({data}) {
  const ItemProduct = (value) => {
    return (
      <div className="card item mb-8">
        <div className="card-body p-0">
          <div className="img">
            <img
              src={require("../../../../../assets/media/products/icon-box.png")}
              alt="logo-product"
              className="w-100"
            />
          </div>
          <div className="desc">
            <p className="title ps-7 mb-2 px-2">{value.item.name}</p>
            <p className="fw-bolder mb-2 px-2 fs-6">Rp {value.item.price}</p>
            <p className="location px-2 mb-2">
              <i className="bi bi-pin-map-fill"></i>
              <span className="ms-2">Kota Bogor</span>
            </p>
            <div className="info px-2 mb-2">
              <div className="d-flex justify-content-start align-items-center">
                <div className="stock me-2">
                  <i className="bi bi-star-fill"></i>
                  <span className="ms-2">Stock {value.item.stock}</span>
                </div>
                <div className="sold border-start px-2">
                  <span className="text-muted">Terjual 100+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="list-product">
      <div className="row">
        {Object.values(data).length > 0 ? (
          data.map( (v, index) => (
            <div className="col-3" key={index}>
              <ItemProduct item={v} />
            </div>
          ))
        ) : (
          <div className="col-12">
            <AlertInfo message={"No record found"} variant="info" />
          </div>
        )}
      </div>
    </div>
  );
}
