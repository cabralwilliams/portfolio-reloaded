import React, { useState } from "react";
const lineColor = "#46d22d";
const lineWidth = 0.5;
const opacity = 0.7;

function GreenCode(props) {
    const newDisplay = [];
    const translate = `translate(${props.translateX}, ${props.translateY})`;
    for(let i = 0; i < 22; i++) {
        newDisplay.push(Math.random() < 0.6 ? true : false);
    }
    const [display, setDisplay] = useState(newDisplay);
    const [codeCountdown, setCodeCountdown] = useState(12);
    
    if(codeCountdown > 0) {
        setTimeout(() => {
            let temp = newDisplay.map(() => Math.random() < 0.6);
            setDisplay(temp);
            setCodeCountdown(codeCountdown - 1);
        },250);
    }
    
    return(
        <g transform={translate}>
            {display[0] && <line x1={-2} y1={0} x2={0} y2={0} stroke={lineColor} strokeWidth={lineWidth} opacity={opacity} />}
            {display[1] && <line x1={0} y1={0} x2={2} y2={0} stroke={lineColor} strokeWidth={lineWidth} opacity={opacity} />}
            {display[2] && <line x1={-2} y1={0} x2={-2} y2={2} stroke={lineColor} strokeWidth={lineWidth} opactiy={opacity} />}
            {display[3] && <line x1={-2} y1={2} x2={-2} y2={4} stroke={lineColor} strokeWidth={lineWidth} opactiy={opacity} />}
            {display[4] && <line x1={2} y1={0} x2={2} y2={2} stroke={lineColor} strokeWidth={lineWidth} opactiy={opacity} />}
            {display[5] && <line x1={2} y1={2} x2={2} y2={4} stroke={lineColor} strokeWidth={lineWidth} opactiy={opacity} />}
            {display[6] && <line x1={-2} y1={0} x2={0} y2={2} stroke={lineColor} strokeWidth={lineWidth} opactiy={opacity} />}
            {display[7] && <line x1={2} y1={0} x2={0} y2={2} stroke={lineColor} strokeWidth={lineWidth} opactiy={opacity} />}
            {display[8] && <line x1={-2} y1={4} x2={0} y2={2} stroke={lineColor} strokeWidth={lineWidth} opactiy={opacity} />}
            {display[9] && <line x1={2} y1={4} x2={0} y2={2} stroke={lineColor} strokeWidth={lineWidth} opactiy={opacity} />}
            {display[10] && <line x1={-2} y1={4} x2={0} y2={4} stroke={lineColor} strokeWidth={lineWidth} opacity={opacity} />}
            {display[11] && <line x1={0} y1={4} x2={2} y2={4} stroke={lineColor} strokeWidth={lineWidth} opacity={opacity} />}
            {display[12] && <line x1={-2} y1={4} x2={-2} y2={6} stroke={lineColor} strokeWidth={lineWidth} opactiy={opacity} />}
            {display[13] && <line x1={-2} y1={6} x2={-2} y2={8} stroke={lineColor} strokeWidth={lineWidth} opactiy={opacity} />}
            {display[14] && <line x1={2} y1={4} x2={2} y2={6} stroke={lineColor} strokeWidth={lineWidth} opactiy={opacity} />}
            {display[15] && <line x1={2} y1={6} x2={2} y2={8} stroke={lineColor} strokeWidth={lineWidth} opactiy={opacity} />}
            {display[16] && <line x1={-2} y1={4} x2={0} y2={6} stroke={lineColor} strokeWidth={lineWidth} opactiy={opacity} />}
            {display[17] && <line x1={2} y1={4} x2={0} y2={6} stroke={lineColor} strokeWidth={lineWidth} opactiy={opacity} />}
            {display[18] && <line x1={-2} y1={8} x2={0} y2={6} stroke={lineColor} strokeWidth={lineWidth} opactiy={opacity} />}
            {display[19] && <line x1={2} y1={8} x2={0} y2={6} stroke={lineColor} strokeWidth={lineWidth} opactiy={opacity} />}
            {display[20] && <line x1={-2} y1={8} x2={0} y2={8} stroke={lineColor} strokeWidth={lineWidth} opacity={opacity} />}
            {display[21] && <line x1={0} y1={8} x2={2} y2={8} stroke={lineColor} strokeWidth={lineWidth} opacity={opacity} />}
        </g>
    );
}

export default GreenCode;