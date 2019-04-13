import React from 'react';

const Slide = (props) => {
    const style = {
        backgroundImage: `url(${props.image})`,
    }
    return <div className="slide" style={style}></div>
}
export default Slide;