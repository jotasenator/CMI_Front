import { types } from "../../types/types"



export const fotoReducer = (state = {}, action) => {

    switch (action.type) {
        case types.foto:
            return {
                ...action.payload,

            }

        default:
            return state
    }

}