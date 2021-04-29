import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router'


export const PrintButton = ({ id }) => {

    const history = useHistory();

    const handlePrintScreen = () => {
        history.push('/imprimir')
        console.log(id)

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
