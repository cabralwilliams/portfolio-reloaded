import React, { useState } from "react";
import GreenCode from "../GreenCode";

function ReloadFooter(props) {

    return(
        <div className="reload-footer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 38">
                <GreenCode translateX={0} translateY={0} />
                <GreenCode translateX={0} translateY={10} />
                <GreenCode translateX={0} translateY={20} />
                <GreenCode translateX={10} translateY={0} />
                <GreenCode translateX={10} translateY={10} />
                <GreenCode translateX={10} translateY={20} />
            </svg>
        </div>
    );
}

export default ReloadFooter;