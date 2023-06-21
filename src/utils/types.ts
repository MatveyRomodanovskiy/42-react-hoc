import friend0 from "../Images/main.jpg";
import {base_url, version} from "./constants";

export interface HeroInfo {
    "name": string,
    "height": number,
    "mass": number,
    "hair_color": string,
    "skin_color": string,
    "eye_color": string,
    "birth_year": string,
    "gender": string
}

export interface DataForSave {
    payload: any,
    time: number
}

export interface Item {
   title: string,
   route: string
}

export interface Hero {
    name: string,
    img: string,
    url: string
}
export interface Characters {
   [key: string]: Hero
}