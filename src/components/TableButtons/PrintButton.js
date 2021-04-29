import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router'
import { types } from '../../types/types'
import { AuthContext } from '../../auth/AuthContext'




export const PrintButton = ({ id }) => {
    const { dispatchID } = useContext(AuthContext)

    const history = useHistory()

    const handlePrintScreen = () => {


        dispatchID({
            type: types.id,
            payload: {
                id: id
            }
        })

        history.push('/imprimir')

    }




    return (
        <div>

            <button
                type='submit'
                className='btn btn-outline-danger '
                onClick={handlePrintScreen}>
                <FontAwesomeIcon icon={faPrint} />
            </button>
        </div>
    )
}
