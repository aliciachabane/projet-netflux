import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Content";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Body/>
            <Footer/>
        </div>
    );
}

export default App;
