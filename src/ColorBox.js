import React from 'react';

const ColorBox = ({ color, hex, isDarkText }) => {
    return (
        <div className='color-box' style={
            {
                backgroundColor: color || hex,
                color: isDarkText ? 'black' : 'white'
            }}>
            <h2>{color || hex ? color || hex : 'Empty Value'}</h2>
        </div>
    );
}

export default ColorBox;