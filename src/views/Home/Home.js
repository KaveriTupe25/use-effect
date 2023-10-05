import React, { useState, useEffect } from "react";
import './Home.css';

export default function Home() {
    const [count, setCount] = useState(0);

    useEffect(function ShowCountValue() {
        console.log(`Value of count is:${count} `);
    }, [count])

    function inc() {
        setCount(count + 1);
    }

    function dec() {
        setCount(count - 1);
    }

    return ( <
        >
        <
        h1 className = "text-center fs-100 " > Counter < /h1>   <
        p className = "fs-100 text-center counter-text" > { count } < /p>  <
        div className = "flexbox" >
        <
        button className = "counter-btn"
        onClick = { dec } > Dec < /button>  <
        button className = "counter-btn"
        onClick = { inc } > Inc < /button>  < /
        div > <
        / >

    )
}