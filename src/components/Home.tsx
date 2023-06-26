import React, {useContext, useEffect} from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {useNavigate, useParams} from "react-router-dom";
import {characters, defaultHero, navItems} from "../utils/constants";
import {SWContext} from "../utils/context";
import {withHeroId} from "../hoc/withHeroId";
import {withRedirectToError} from "../hoc/withRedirectToError";
const Home = () => {

    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    );
};

export default withHeroId(navItems[0].route)(Home);