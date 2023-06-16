import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { openModal } from '../../../layouts/components/modals/ModalPopUp';

export default function Form() {

    // data
    const [objAuth, setObjAuth] = useState({
        email: "",
        password: ""
    });

    // submit form
    const handlerSubmit = (e) => {
        e.preventDefault();
        if (objAuth.email !== "" && objAuth.password !== "") {
            setPostAuth({ ...postAuth, loading: true, message: "", data: [] });
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:8080/api/auth/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: objAuth
            };
            axios.request(config)
                .then((response) => {
                    let results = response.results;
                    if (results === 'false') {
                        setPostAuth({ ...postAuth, loading: false, message: "Email or password is not match", data: [] });
                    } else {
                        setPostAuth({ ...postAuth, loading: false, message: "welcome " + objAuth.email, data: response });
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setPostAuth({ ...postAuth, loading: false, message: error });
                })
        } else {
            openModal({ header: "Information", message: "Please fill up the form with correctly" });
        }
    }

    // post
    const [postAuth, setPostAuth] = useState({
        loading: false,
        data: [],
        message: ""
    })
    // session storage
    sessionStorage.setItem("auth", "anda berhasil login")

    // local storage
    localStorage.setItem('auth_login', "anda berhasil login")
    return (
        <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
            <Link to={"/"} className="mb-12">
                <img src="https://www.ibik.ac.id/wp-content/uploads/2023/03/logo-ibik-web.png" alt="logo-ibik" className='h-40px' />
            </Link>
            <div className="w-lg-500px rounded shadow-sm p-10 p-lg-15 mx-auto" style={{ backgroundColor: "#80008008" }}>
                <form method="post" className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework' autoComplete='off'
                    onSubmit={(e) => handlerSubmit(e)}>
                    <div className="text-center mb-10">
                        <h1 className="text-dark mb-3">Sign In to Portal</h1>
                        <div className="text-gray-400 fw-bold fs-4">
                            New Here ?
                            <Link to={"/signup"} className="ms-2 text-decoration-none">Create an account</Link>
                        </div>
                    </div>
                    <div className='alert alert-primary'>
                        {(postAuth.message) ? <p>{postAuth.message}</p> : ""}
                    </div>

                    <div className="fv-row mb-10 fv-plugins-icon-container">
                        <label className="form-label fs-6 fw-bolder text-dark">Email</label>
                        <input type="email" name="email" className='form-control form-control-lg'
                            defaultValue={objAuth.email}
                            onChange={(e) => setObjAuth({ ...objAuth, email: e.target.value })} />
                    </div>
                    <div className="fv-row mb-10 fv-plugins-icon-container">
                        <label className="form-label fs-6 fw-bolder text-dark">Password</label>
                        <input type="password" name="password" className='form-control form-control-lg'
                            defaultValue={objAuth.password}
                            onChange={(e) => setObjAuth({ ...objAuth, password: e.target.value })}
                        />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-lg btn-primary w-100 mb-5" type='submit'>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}