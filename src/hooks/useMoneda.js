import React, { Fragment, useState } from 'react';

const useMoneda = () => {
    
    //State de custom hook
    const [ state, actualizarState] = useState('');

    const Seleccionar = () => (
        <Fragment>
            <label>Moneda</label>
            <select>
                <option
                    value="EUR"
                >Euro</option>
            </select>
        </Fragment>
    )

    //retornar state, interfaz, y funcion que modifica
    return [ state, Seleccionar, actualizarState ];
}
 
export default useMoneda;