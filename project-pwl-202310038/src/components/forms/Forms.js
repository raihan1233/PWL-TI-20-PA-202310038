import React, { useState } from "react"
import { useForm } from "react-hook-form"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

const Forms = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [date, setDate] = useState(new Date());
    const [npm, setNpm] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [messageNpm, setMessageNpm] = useState('');
    const [messageFull, setMessageFull] = useState('');
    const [messageAge, setMessageAge] = useState('');

    var age = new Date().getFullYear() - new Date(date).getFullYear();

    const onSubmit = () => {
        setMessageNpm(`NPM : ${npm}`);
        setMessageFull(`Fullname : ${firstName} ${middleName} ${lastName}`)
        setMessageAge(`Age : ${age}th`)
        setFirstName('');
        setMiddleName('');
        setLastName('');
        setDate('')
    }

    return (
        <div className="container card mt-5 py-5 px-3 col-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-center">Registration Form</h3>
                <div className="mb-3">
                    <label htmlFor="inputNPM" className="form-label">NPM</label>
                    <input
                        className="form-control"
                        placeholder="Enter NPM"
                        id="inputNPM"
                        type="number"
                        {...register("npm", {
                            maxLength: 10,
                            required: true,
                            onChange: (e) => {setNpm(e.target.value)}
                        })}
                    />
                    <div className="text-danger">
                        {errors.npm?.type === "maxLength" && "Entered number cannot more than 10 digits"}
                        {errors.npm?.type === "required" && "NPM is required"}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputFirstName">First Name</label>
                    <input
                        className="form-control"
                        placeholder="Enter firstname"
                        type="text"
                        id="inputFirstName"
                        {...register("firstName", { 
                            required: true, 
                            value: firstName, 
                            onChange : (e) => {setFirstName(e.target.value)} 
                        })}
                    />
                    <div className="text-danger">
                        {errors.firstName?.type === "required" && "firstName is required"}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputMiddleName">Middle Name</label>
                    <input
                        className="form-control"
                        placeholder="Enter middlename"
                        type="text"
                        id="inputMiddleName"
                        {...register("middlename", { 
                            required: false, 
                            value: middleName, 
                            onChange: (e) => {setMiddleName(e.target.value)} 
                        })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputLastName">Last Name</label>
                    <input
                        className="form-control"
                        placeholder="Enter lastname"
                        type="text"
                        id="inputFirstName"
                        {...register("lastName", { 
                            required: true, 
                            value: lastName,
                            onChange: (e) => {setLastName(e.target.value)}
                        })}
                    />
                    <div className="text-danger">
                        {errors.lastName?.type === "required" && "lastName is required"}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputBirthdate">Birthdate</label>
                    <DatePicker
                        className="form-control"
                        selected={date}
                        placeholderText='Enter Birthdate'
                        dateFormat="yyyy-MM-dd"
                        required={true}
                        onChange={(date) => {setDate(date)}}
                    />
                    <div className="text-danger">
                        {errors.birthdate?.type === "required" && "birthdate is required"}
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary" type="submit" data-bs-toggle="modal" data-bs-target="#Modal">
                        submit
                    </button>
                </div>
            </form>
            <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h6>{messageNpm}</h6>
                            <h6>{messageFull}</h6>
                            <h6>{messageAge}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forms