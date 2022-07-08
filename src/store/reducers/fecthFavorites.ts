import { iAction } from "../../interfaces/Redux";
import { ICharacter } from "../../interfaces/Character";
import { ADD_FAV, REMOVE_FAV } from "../actions/favorite";

const initalState = {
    favoritos: []
}

export const fetchFavoritesReducer = (state = initalState, action: iAction) => {
    switch (action.type) {
        case ADD_FAV:
            if (state.favoritos.filter((el: ICharacter) => el.id === action.payload.id).length > 0) {
                return {
                    state
                }
            } else {
                return {
                    ...state,
                    favoritos: [
                        ...state.favoritos,
                        action.payload
                    ]
                }
            }

        case REMOVE_FAV:
            return {
                ...state,
                favoritos:
                    state.favoritos.filter((fav: ICharacter) => fav.id !== action.payload)
            }
        default:
            return {
                ...state
            }
    }
}