import React from "react";

function Button({ text, color, onClick }) {
    return (
        <button
            style={{ backgroundColor: color, color: 'white', fontSize: '20px', padding: '10px 20px' }}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button