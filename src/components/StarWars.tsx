import React, {useContext, useEffect} from 'react';
import {characters, defaultHero, navItems, starWarsInfo} from '../utils/constants';
import style from '../css_modules/farGalaxy.module.css';
import {useNavigate, useParams} from "react-router-dom";
import {SWContext} from "../utils/context";
import {withHeroId} from "../hoc/withHeroId";
import {withRedirectToError} from "../hoc/withRedirectToError";

const StarWars = () => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);
    const navigate = useNavigate();
    return (
        <div className={style.farGalaxy}>
            <p>{starWarsInfo}</p>
        </div>
    );
};

export default withRedirectToError(navItems[2].route)(StarWars);