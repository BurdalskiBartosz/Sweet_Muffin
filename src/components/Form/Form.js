import React, { Component } from 'react';

class Form extends Component {
    state = {}
    render() {
        return (
            <form className="contact__form">
                <fieldset className='contact__fieldset'>
                    <legend className='contact__legend'>Napisz do nas</legend>
                    <label className='contact__label' htmlFor='name'>Twoję imię:
                        <input className='contact__input' type='text' id='name' name="username" />
                    </label>
                    <label className='contact__label' htmlFor='email'>Twój email:
                        <input className='contact__input' type='email' id='email' name="email" />
                    </label>

                    <label className='contact__label' name="choosenSubject" htmlFor="question-select">Temat wiadomości:
                    <select className='contact__select' id="question-select">
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
                    <textarea className='contact__textarea' cols="num" rows="8" />
                    <input className='contact__input contact__input-submit' type="submit" value="Submit" />
                </fieldset>
            </form>
        );
    }
}

export default Form;