import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight:bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;
const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border:none;
    font-size: 1.2rem;

`;

const useCriptomoneda = ( label, stateInicial, opciones ) => {
    
    //State de custom hook
    const [ state, actualizarState] = useState(stateInicial);

    const SeleccionarCriptomoneda = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={ e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="" >- Seleccione -</option>
                
            </Select>
        </Fragment>
    )

    //retornar state, interfaz, y funcion que modifica
    return [ state, SeleccionarCriptomoneda, actualizarState ];
}
 
export default useCriptomoneda;