import React from "react";
import {characters, defaultHero, navItems} from "../utils/constants";
import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context";

export const withHeroId = (route: string) => (Component: React.FC<{heroId: string}>) => (props: any)  => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);
    const {hero} = useContext(SWContext)
    const navigate = useNavigate();
    useEffect(() => {
        if (!characters[heroId]){
          navigate(`/${route}/${defaultHero}`)
          changeHero(defaultHero);
           return()=>{}
        } else {
            changeHero(heroId)
        }

    },[heroId])
    return <Component heroId={hero}/>
}