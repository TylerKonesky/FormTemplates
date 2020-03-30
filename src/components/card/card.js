import React from 'react';
import {Field, reduxForm } from 'redux-form';
import './card.css'

class Card extends React.Component{
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
       
        return(
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {/* {this.renderError(meta)} */}
            </div>
            
        )
    }

    render(){
        return(
            <div className="main-card-wrapper">
                <div>Register</div>
                <form className="form-wrapper">
                    <Field className="form-field" name="name" label="Name" component={this.renderInput} />
                    <Field className="form-field" name="email" label="Email" component={this.renderInput} />
                    <Field className="form-field" name="phone" label="Phone Number" component={this.renderInput} />
                    <button className="form-button">Register</button>
                </form>

            </div>
        )
    }
}

export default reduxForm({
    form: 'registrationForm'
})(Card)