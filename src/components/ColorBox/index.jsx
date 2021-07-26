import React, { useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {

};

function getRandomColor() {
    const LIST_COLOR = ['deeppink', 'yellow', 'blue', 'black', 'purple'];
    const randomColor = Math.trunc(Math.random() * 5);
    return LIST_COLOR[randomColor];
}

function ColorBox() {

    const initColor = localStorage.getItem('box_color') || 'deeppink';
    console.log(initColor);
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        console.log(initColor);
        return initColor;
    });

    const onBoxClick = () => {
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box_color', newColor);
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={onBoxClick}
        >

        </div>
    );
}

export default ColorBox;