import { ICharacter } from "../../interfaces/Character";

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';

export const addFav = (character : ICharacter) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

export const removeFav = (id: number) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}