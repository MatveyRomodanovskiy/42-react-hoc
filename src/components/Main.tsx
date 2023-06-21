import React, {useContext} from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {characters, navItems} from "../utils/constants";
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import {SWContext} from "../utils/context";


const Main = () => {
    const {hero} = useContext(SWContext);
    return (
        <Routes>
            {[`/`,`/${navItems[0].route}`, `/${navItems[0].route}/:heroId`].map(path =>
                <Route key={path} path={path} element={<Home/>}/>)}
            {[`/${navItems[1].route}`, `/${navItems[1].route}/:heroId`].map(path =>
                <Route key={path} path={path} element={<AboutMe/>}/>)}
            {[`/${navItems[2].route}`, `/${navItems[2].route}/:heroId`].map(path => <Route key={path} path={path} element={<StarWars/>}/>)}
            {[`/${navItems[3].route}`, `/${navItems[3].route}/:heroId`].map(path => <Route key={path} path={path} element={<Contact/>}/>)}
                <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    )

}

export default Main;