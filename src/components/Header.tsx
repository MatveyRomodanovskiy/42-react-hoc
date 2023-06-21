import React, {useContext} from 'react';
import Navigation from "./Navigation";
import {SWContext} from "../utils/context";
import {characters} from "../utils/constants";

const Header = () => {
    const {hero} = useContext(SWContext);
    const heroAddress = characters[hero] ? characters[hero].name : "OOPS";

    return (
        <header>
            <Navigation/>
            <h1 className="text-center py-4">{heroAddress}</h1>
        </header>
    );
};

export default Header;