//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Home from "./component/home.jsx";



let seconds = 0;
setInterval(() => {

    const hundredThousands = Math.floor(seconds / 100000);
    const tenThousands = Math.floor((seconds % 100000) / 10000);
    const thousands = Math.floor((seconds % 10000) / 1000);
    const hundreds = Math.floor((seconds % 1000) / 100);
    const tens = Math.floor((seconds % 100) / 10);
    const ones = seconds % 10;

    ReactDOM.createRoot(document.getElementById('app')).render(<Home
        hundredThousands={hundredThousands}
        tenThousands={tenThousands}
        thousands={thousands}
        hundreds={hundreds}
        tens={tens}
        ones={ones}
    />);
    seconds = seconds + 1;
}, 10);

//render your react application
/* ReactDOM.createRoot(document.getElementById('app')).render(<Home/>); */

