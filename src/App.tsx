import React, {useState} from "react";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {defaultHero} from "./utils/constants";
import {SWContext} from "./utils/context";

const App = () => {
    const [hero, setHero] = useState(defaultHero);

    return (
        <div className="container-fluid">
            <SWContext.Provider value={
                {
                    hero, changeHero: setHero
                }
            }>
                <Header/>
                <Main/>
            </SWContext.Provider>
            <Footer/>
        </div>
    );
}

export default App;

