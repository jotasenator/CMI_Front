import React from 'react'

export const Fecha = () => {
    const fecha = new Date()
    const agno = fecha.getUTCFullYear()
    let mes = fecha.getMonth()
    const dia = fecha.getDate()

    switch (mes) {
        case 0:
            mes = 'Enero';
            break;
        case 1:
            mes = 'Febrero';
            break;
        case 2:
            mes = 'Marzo';
            break;
        case 3:
            mes = 'Abril';
            break;
        case 4:
            mes = 'Mayo';
            break;
        case 5:
            mes = 'Junio';
            break;
        case 6:
            mes = 'Julio';
            break;
        case 7:
            mes = 'Agosto';
            break;
        case 8:
            mes = 'Septiembre';
            break;
        case 9:
            mes = 'Octubre';
            break;
        case 10:
            mes = 'Noviembre';
            break;
        case 11:
            mes = 'Diciembre'
            break;
        default:
            return ''

    }

    return (
        <div >

            {` ${dia} de  ${mes} del ${agno}`}


        </div>
    )
}
