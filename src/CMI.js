import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { fotoReducer } from './components/formScreen/fotoReducer'
import { idReducer } from './id/idReducer'


import { AppRouter } from './routers/AppRouter'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }

}

const initID = () => {
    return JSON.parse(localStorage.getItem('id')) || { id: '' }

}
const initImage = () => {
    return { foto: '' }

}
// const initImage = () => {
//     return JSON.parse(localStorage.getItem('foto')) || { foto: '' }

// }

export const CMI = () => {


    const [user, dispatch] = useReducer(authReducer, {}, init)
    const [id, dispatchID] = useReducer(idReducer, {}, initID)
    const [foto, dispatchFoto] = useReducer(fotoReducer, {}, initImage)


    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))

    }, [user])

    useEffect(() => {
        localStorage.setItem('id', JSON.stringify(id))

    }, [id])

    useEffect(() => {
        localStorage.setItem('foto', JSON.stringify(foto))

    }, [foto])

    return (
        <div>
            <AuthContext.Provider value={{
                user,
                dispatch,
                id,
                dispatchID,
                foto,
                dispatchFoto
            }}>

                <AppRouter />

            </AuthContext.Provider>

        </div>
    )
}
