import { types } from "../types/types";

export const idReducer = (state = {}, action) => {

    switch (action.type) {
        case types.id:
            return {
                ...action.payload,

            }

        default:
            return state
    }

}