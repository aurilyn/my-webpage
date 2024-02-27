import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

function Page() {
    return (
        <div>
            <Navbar />
            <Content />
            <Footer />
        </div>    
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
