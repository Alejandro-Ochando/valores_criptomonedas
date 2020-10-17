import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color .3s ease;  
  
  &:hover {
      background-color: #326ac0;
      cursor: pointer;
  }
`;

const Formulario = () => {
    
    //Listado de criptomonedas
    const [ listacripto, guardarCriptomoneda] = useState([]);
    //Validacion
    const [ error, guardarError ] = useState(false);

    const MONEDAS = [
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'GBP', nombre: 'Libra'},
        {codigo: 'USD', nombre: 'Dolar EEUU'}
    ];

    //utilizar useMoneda
    const [ moneda, SelectMonedas, actualiarState ] = useMoneda('Elige tu moneda','', MONEDAS);
    // utilizar useCriptomoneda
    const [ criptomoneda, SelectCriptomoneda, actualizarState ] = useCriptomoneda('Elige tu criptomoneda', '', listacripto)
    //Ejecutar llamar a la REST API
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            guardarCriptomoneda(resultado.data.Data);
        }
        consultarAPI();
    }, []);
    
    //Cando el usuario hace submit
   
    const convertirMoneda = e => {
        e.preventDefault();

        if(moneda.trim() === '' || criptomoneda.trim() === ''){
            guardarError(true);
            return;
        }
        guardarCriptomoneda(false);

    }
    


    return ( 

        <form
            onSubmit={convertirMoneda}
        >
            {error ? 'Hay un Error' : null}
            <SelectMonedas />
            <SelectCriptomoneda />
            <Boton
                type="submit"
                value="calcular"
            />
        </form>

     );
}
 
export default Formulario;