import React, {useContext} from 'react';
import main from "../Images/main.jpg";
import {SWContext} from "../utils/context";
import {characters} from "../utils/constants";

const Hero = () => {
    const {hero} = useContext(SWContext);

    return (
        <section className="float-start w-25 me-3">
            {characters[hero] && <img className="w-100" src={characters[hero].img} alt={characters[hero].name}/>}
        </section>
    );
};

export default Hero;