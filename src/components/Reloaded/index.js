import React from "react";
import GreenCode from "../GreenCode";
const bgColor = "#191e19";

/*
<GreenCode translateX={0} translateY={0} />
                <GreenCode translateX={0} translateY={10} />
                <GreenCode translateX={0} translateY={20} />
                <GreenCode translateX={0} translateY={30} />
                <GreenCode translateX={0} translateY={40} />
                <GreenCode translateX={0} translateY={50} />
                <GreenCode translateX={0} translateY={60} />
                <GreenCode translateX={0} translateY={70} />

<GreenCode translateX={140} translateY={0} />
                <GreenCode translateX={140} translateY={10} />
                <GreenCode translateX={140} translateY={20} />
                <GreenCode translateX={140} translateY={30} />
                <GreenCode translateX={140} translateY={40} />
                <GreenCode translateX={140} translateY={50} />
                <GreenCode translateX={140} translateY={60} />
                <GreenCode translateX={140} translateY={70} />
*/

function Reloaded(props) {
    return(
        <div id="reloaded">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 3 140 71">
                <rect x={-10} y={-10} width={170} height={97} stroke="none" fill={bgColor} />

                <text x='17.75' y='44.75' fontSize='16' fill='#000000' fontFamily="Times New Roman, Times, serif">Cabral Williams</text>
                <text x='17' y='44' fontSize='16' fill='#46d22d' fontFamily="Times New Roman, Times, serif">Cabral Williams</text>

                <rect x={-10} y={-10} width={170} height={97} stroke="none" fill={bgColor} opacity='0.3'/>
               
                <GreenCode translateX={20} translateY={10} />
                <GreenCode translateX={20} translateY={20} />
                <GreenCode translateX={20} translateY={30} />
                <GreenCode translateX={20} translateY={40} />
                <GreenCode translateX={20} translateY={50} />
                <GreenCode translateX={20} translateY={60} />
                               
                <GreenCode translateX={40} translateY={10} />
                <GreenCode translateX={40} translateY={20} />
                <GreenCode translateX={40} translateY={30} />
                <GreenCode translateX={40} translateY={40} />
                <GreenCode translateX={40} translateY={50} />
                <GreenCode translateX={40} translateY={60} />
                               
                <GreenCode translateX={60} translateY={10} />
                <GreenCode translateX={60} translateY={20} />
                <GreenCode translateX={60} translateY={30} />
                <GreenCode translateX={60} translateY={40} />
                <GreenCode translateX={60} translateY={50} />
                <GreenCode translateX={60} translateY={60} />
                           
                <GreenCode translateX={80} translateY={10} />
                <GreenCode translateX={80} translateY={20} />
                <GreenCode translateX={80} translateY={30} />
                <GreenCode translateX={80} translateY={40} />
                <GreenCode translateX={80} translateY={50} />
                <GreenCode translateX={80} translateY={60} />
                       
                <GreenCode translateX={100} translateY={10} />
                <GreenCode translateX={100} translateY={20} />
                <GreenCode translateX={100} translateY={30} />
                <GreenCode translateX={100} translateY={40} />
                <GreenCode translateX={100} translateY={50} />
                <GreenCode translateX={100} translateY={60} />
                            
                <GreenCode translateX={120} translateY={10} />
                <GreenCode translateX={120} translateY={20} />
                <GreenCode translateX={120} translateY={30} />
                <GreenCode translateX={120} translateY={40} />
                <GreenCode translateX={120} translateY={50} />
                <GreenCode translateX={120} translateY={60} />
            </svg>
        </div>
    );
}

export default Reloaded;