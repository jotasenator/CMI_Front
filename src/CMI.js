import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { idReducer } from './id/idReducer'

import { AppRouter } from './routers/AppRouter'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }

}

const initID = () => {
    return (
        { id: '' }
    )
}

export const CMI = () => {


    const [user, dispatch] = useReducer(authReducer, {}, init)
    const [id, dispatchID] = useReducer(idReducer, {}, initID)


    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))

    }, [user])

    return (
        <div>
            <AuthContext.Provider value={{ user, dispatch, id, dispatchID }}>

                <AppRouter />

            </AuthContext.Provider>

        </div>
    )
}
