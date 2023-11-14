import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import moviesData from '../work/Data';

const Details = () => {
    const [descrip, setDescrip] = useState({});
    const {id} = useParams();
    useEffect(() =>{
        const movieD = moviesData.find((el) => el.id == id);
        setDescrip(movieD);
    })
  return (
    <div>
        <h1> description</h1>
        <h2> {descrip.description}</h2>
        <div>
            <iframe 
            width="560"
            height="315"
            src={descrip.trailer}
            >
            
            </iframe>
        </div>
    <Button href='/'>BACK</Button>
    </div>
  )
}

export default Details