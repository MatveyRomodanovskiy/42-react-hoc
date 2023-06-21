import React, {useContext} from 'react';
import {Item} from "../utils/types";
import {Link} from "react-router-dom";
import {SWContext} from "../utils/context";

interface Props {
    item: Item
}
const NavItem = ({item}: Props) => {
    const {hero} = useContext(SWContext)
    return (
        <li>
            <Link className="nav-item btn btn-danger mx-1" to={`/${item.route}/${hero}`}>{item.title}</Link>
        </li>
    );
};

export default NavItem;