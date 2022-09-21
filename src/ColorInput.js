import React from 'react';

const ColorInput = ({ color, setColor, hex, setHex, isDarkText, setIsDarkText }) => {
    return (
        <div className='input-field'>
            <input
                autofocus
                className="color-input"
                type="text"
                placeholder='Add color name'
                onChange={e => setColor(e.target.value) || setHex(e.target.value)}
            />
            <button
                className='toggle-text'
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle Text Color
            </button>
        </div>
    );
}

export default ColorInput;