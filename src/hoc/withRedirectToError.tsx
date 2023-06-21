import React from "react";
import {characters, defaultHero, navItems} from "../utils/constants";
import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context";
import ErrorPage from "../components/ErrorPage";
export const withRedirectToError = (route: string) => (Component: React.FC) => (props: any)  => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);
    const navigate = useNavigate();
    let flag = true;

    useEffect(() => {
        if (!characters[heroId]){
            Component = ErrorPage;
            changeHero(heroId);
            return()=>{}
        }
        changeHero(heroId);

    },[heroId])

        return <Component {...props}/>

}