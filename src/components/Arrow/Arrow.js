import React from 'react';

const Arrow = (props) => {
    return (
        <div className={props.class} onClick={props.nextSlide}>
            <i className={props.arrow}></i>
        </div>
    )
}
export default Arrow;