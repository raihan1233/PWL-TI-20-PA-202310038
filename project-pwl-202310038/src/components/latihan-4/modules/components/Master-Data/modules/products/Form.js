import React, { useState } from "react";
import { openModal } from "../../../../../layouts/components/modals/ModalPopUp";
import CallAxios from "../../../Library/CallAxios";

export function Form() {
  
  const [postData, setPostData] = useState({
    name: "",
    description: "",
    stock: 0,
    price: "",
    is_active: 1,
  });

  const submitForm = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      url: "http://localhost:8080/api/products",
      headers: { "Content-Type": "application/json" },
      data: postData,
    };
    CallAxios(config)
      .then((response) => {
        if(response.error) {
          openModal({ header: "Error", message: response.error });
        } else {
          let results = response.data;
          console.log(results);
          if (results) {
            openModal({ header: "Info", message: "Successfully submited" });
          } else {
            openModal({ header: "Error", message: "Failed submit" });
          }
        }
      })
  };

  return (
    <div className="card bg-white">
      <div className="card-header border-0 py-3">
        <div className="card-title d-flex flex-column">
          <h3 className="text-dark">Form Product</h3>
          <p className="text-muted fs-7">
            Please fill up the form with correctly
          </p>
        </div>
      </div>
      <div className="card-body pt-0">
        <form 
          method="post" 
          autoComplete="off" 
          id="form-product"
          onSubmit={(e) => submitForm(e)}
        >
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input 
              type="text" 
              name="name" 
              className="form-control" 
              defaultValue={postData.name}
              onChange={(e) =>
                setPostData({ ...postData, name: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea 
              name="desc" 
              className="form-control"
              defaultValue={postData.description}
              onChange={(e) =>
                setPostData({ ...postData, description: e.target.value })
              } 
            >
            </textarea>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <div className="mb-3">
                <label className="form-label">Stock</label>
                <input 
                  type="number" 
                  name="name" 
                  className="form-control" 
                  defaultValue={postData.stock}
                  onChange={(e) =>
                    setPostData({ ...postData, stock: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-sm-12 col-lg-9">
              <div className="mb-3">
                <label className="form-label">Price</label>
                <div className="input-group">
                  <span className="input-group-text">Rp</span>
                  <input 
                    type="text" 
                    name="price" 
                    className="form-control" 
                    defaultValue={postData.price}
                    onChange={(e) =>
                      setPostData({ ...postData, price: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-end mt-3">
            <button className="btn btn-light" type="button">
              Cancel
            </button>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
