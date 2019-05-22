import React, { Component } from 'react';

class Form extends Component {
    state = {
        username: '',
        email: '',
        subject: '',
        message: '',

        errors: {
            username: false,
            email: false,
            subject: false,
            message: false,
        }
    }
    validationMessages = {
        emptyUsername: "Musisz podać imię.",
        noEmail: "Musisz wpisać poprawny email.",
        noSubject: "Podaj temat wiadomości.",
        noText: "Wpisz swoją wiadomość.",
    }

    handleChange = (e) => {
        console.log(e.target.name);
        const name = e.target.name;
        this.setState({
            [name]: e.target.value,
        })
    }

    checkValidation = () => {
        let username = true;
        let email = true;
        let subject = true;
        let message = true;
        let correctForm = true;
        if (this.state.username.length !== 0) {
            username = false;
        }
        if (this.state.email.length >= 5 && this.state.email.indexOf('@') !== -1) {
            email = false;
        }
        if (this.state.subject !== "") {
            subject = false;
        }
        if (this.state.message.length !== 0) {
            message = false;
        }
        if (username || email || subject || message) {
            correctForm = false;
        }
        return ({
            username,
            email,
            subject,
            message,
            correctForm
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const checkValidation = this.checkValidation();
        if (checkValidation.correctForm) {
            this.setState({
                username: '',
                email: '',
                subject: '',
                message: '',

                errors: {
                    username: false,
                    email: false,
                    subject: false,
                    message: false,
                }
            })
        }
        else {
            this.setState({
                errors: {
                    username: checkValidation.username,
                    email: checkValidation.email,
                    subject: checkValidation.subject,
                    message: checkValidation.message
                }
            })
        }
    }
    render() {
        return (
            <form className="contact__form" onSubmit={this.handleSubmit} noValidate>
                <fieldset className='contact__fieldset'>
                    <legend className='contact__legend'>Napisz do nas</legend>
                    <label className='contact__label' htmlFor='name'>Twoję imię:
                        <input className='contact__input' value={this.state.username} onChange={this.handleChange} type='text' id='name' name="username" />
                    </label>

                    {this.state.errors.username && <span className="validate__info">{this.validationMessages.emptyUsername}</span>}

                    <label className='contact__label' htmlFor='email'>Twój email:
                        <input className='contact__input' value={this.state.email} onChange={this.handleChange} type='email' id='email' name="email" />
                    </label>

                    {this.state.errors.email && <span className="validate__info">{this.validationMessages.noEmail}</span>}

                    <label className='contact__label' name="choosenSubject" htmlFor="question-select">Temat wiadomości:
                        <select onChange={this.handleChange} value={this.state.subject} name="subject" className='contact__select' id="question-select">
                            <option value="">--Proszę wybierz opcję--</option>
                            <optgroup label="Zamówienie">
                                <option value="cupcakes">Babeczki</option>
                                <option value="cakes">Ciasta</option>
                                <option value="other order">Inne zamówienie</option>
                            </optgroup>
                            <optgroup label="Usługi">
                                <option value="muffin wedding cakes">Muffinowe Torty Ślubne</option>
                                <option value="cookie baptisms">Ciasteczkowe Chrzciny</option>
                                <option value="cookie wedding">Ciasteczkowy Ślub</option>
                                <option value="other service">Inna usługa</option>
                            </optgroup>
                            <optgroup label="Inne">
                                <option value="cooperation">Współpraca</option>
                                <option value="other order">Inne</option>
                            </optgroup>
                        </select>
                    </label>

                    {this.state.errors.subject && <span className="validate__info">{this.validationMessages.noSubject}</span>}

                    <textarea className='contact__textarea' onChange={this.handleChange} name="message" value={this.state.message} cols="num" rows="8" />

                    {this.state.errors.message && <span className="validate__info">{this.validationMessages.noText}</span>}

                    <input className='contact__input contact__input-submit' type="submit" value="Wyślij" />
                </fieldset>
            </form>
        );
    }
}

export default Form;