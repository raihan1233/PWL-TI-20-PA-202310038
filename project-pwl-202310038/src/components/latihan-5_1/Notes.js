import React, { Component } from 'react'

export default class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        this.setState({value: ev.target.value});
    }


    render() {
        return (
            <div className='bg-info card h-100 pt-5'>
                <h1 className='text-center text-white'>{this.state.value}</h1>
                <div className="bg-body rounded shadow-sm p-10 p-lg-15 col-6 mx-auto mt-3">
                    <form method='post' autoComplete='off' className='form w-100 p-5'>
                        <div className="text-center mb-10">
                            <h1 className='text-dark mb-3'>Widget One</h1>
                            <div className="text-secondary fw-bold fs-5">
                                Please fill up this form with correctly
                            </div>
                        </div>

                        <div className="fv-row mb-10 fv-plugins-icon-container">
                            <label className="form-label fs-6 fw-bolder text-dark mt-5">Type the title of this web</label>
                            <input type="text" name="title" className='form-control form-control-lg form-control-solid' value={this.state.value}
                                onChange={this.handleChange} />
                        </div>

                        <div className="text-center">
                            <button type='button' className='btn btn-lg btn-primary w-100 my-4'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}