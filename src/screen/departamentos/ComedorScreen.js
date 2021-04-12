import React from 'react'
import { TableScreen } from '../../components/TableScreen'


export const ComedorScreen = () => {
    return (
        <div className='container mt-5'>
            <h2>Comedor</h2>
            <TableScreen departamento='Comedor' />
        </div>
    )
}
