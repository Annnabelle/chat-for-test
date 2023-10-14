import React from 'react';
import './styles.sass';

const Button = ({text, onClick, type, onChange}) => {
    return(
        <div className='btn-container'>
            <button onClick={onClick} className= 'btn' type={type} onChange={onChange}>
                <p className='btn-text'></p>{text}
            </button>
        </div>
        
    )
}

export default Button;