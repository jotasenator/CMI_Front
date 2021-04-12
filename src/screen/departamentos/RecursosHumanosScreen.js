import React from 'react'
import { TableScreen } from '../../components/TableScreen'

export const RecursosHumanosScreen = () => {
    return (
        <div className='container mt-5'>
            <h2>Recursos Humanos</h2>
            <TableScreen departamento='Recursos Humanos' />
        </div>
    )
}
