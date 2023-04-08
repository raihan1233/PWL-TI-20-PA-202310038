import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyCard from './MyCard';

export default function FormProfile() {
    var today = new Date();
    const currDate = formatDate(today);
    const objProfile = {
        npm: 0,
        fname: "",
        mname: "",
        lname: "",
        birthdate: currDate
    }

    const [profile, setProfile] = useState(objProfile);
    const [mymodal, setMymodal] = useState({
        show: false,
        message: ""
    });

    const handlerSubmit = (e) => {
        e.preventDefault();
        var formid = e.target.id;
        var target = document.getElementById(formid);
        var myButton = target.getElementsByClassName("btn-submit")[0];
        myButton.textContent = "Processing...";
        myButton.disabled = true;
        const myresult = (
            <div className="profile">
                <p className="text-dark">NPM: {profile.npm}</p>
                <p className="text-dark">Fullname: {profile.fname} {profile.mname} {profile.lname} </p>
                <p className="text-dark">Birthdate: {profile.birthdate}</p>
                <p className="text-dark">Age: {calculateAge(profile.birthdate)} years old</p>
            </div>
        )
        setMymodal({ ...mymodal, message: myresult, show: true });
        myButton.textContent = "Submit";
        myButton.disabled = false;
    }    

    const modalHandleClose = () => {
        setMymodal({ ...mymodal, show: false })
    }

    return (
        <MyCard>
            <form className='form-profile' method='post' onSubmit={(e) => handlerSubmit(e)} id="form-profile" >
                <div className="fv-row mb-10 fv-plugins-icon-container">
                    <label className="form-label fs-6 fw-bolder text-dark">NPM</label>
                    <input type="text" name="npm" required className='form-control form-control-lg form-control-solid' pattern="^[0-9]*$" defaultValue={profile.npm} onChange={(e) => setProfile({ ...profile, npm: e.target.value })} />
                </div>

                <div className="fv-row mb-10 fv-plugins-icon-container">
                    <label className="form-label fs-6 fw-bolder text-dark">First Name</label>
                    <input type="text" name="fname" required className='form-control form-control-lg form-control-solid' defaultValue={profile.fname} onChange={(e) => setProfile({ ...profile, fname: e.target.value })} />
                </div>
                <div className="fv-row mb-10 fv-plugins-icon-container">
                    <label className="form-label fs-6 fw-bolder text-dark">Middle Name</label>
                    <input type="text" name="mname" className='form-control form-control-lg form-control-solid' defaultValue={profile.mname} onChange={(e) => setProfile({ ...profile, mname: e.target.value })} />
                </div>
                <div className="fv-row mb-10 fv-plugins-icon-container">
                    <label className="form-label fs-6 fw-bolder text-dark">Last Name</label>
                    <input type="text" name="lname" required className='form-control form-control-lg form-control-solid' defaultValue={profile.lname} onChange={(e) => setProfile({ ...profile, lname: e.target.value })} />
                </div>
                <div className="fv-row mb-10 fv-plugins-icon-container">
                    <label className="form-label fs-6 fw-bolder text-dark">Birthdate</label>
                    <DatePicker
                        selected={new Date(profile.birthdate)}
                        onChange={(value) => setProfile({...profile, birthdate:formatDate(value)})}
                        className="form-control form-control-lg form-control-solid"
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Choose Date"
                    />
                </div>

                <div className="text-center">
                    <button type="button" className='btn btn-lg btn-light'>Clear</button>
                    <button type="submit" className='btn btn-lg btn-primary mx-2 btn-submit'>Submit</button>
                </div>
            </form>
            <ModalPopUP show={mymodal.show} handleClose={modalHandleClose} message={mymodal.message} />
        </MyCard>
    )
}

const ModalPopUP = ({ show, handleClose, message }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {message}
            </Modal.Body>
        </Modal>
    )
}

const formatDate = (datestring) => {
    const today = new Date(datestring);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return yyyy + "-" + mm + "-" + dd;
}

const calculateAge = (birthdate) => {
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

