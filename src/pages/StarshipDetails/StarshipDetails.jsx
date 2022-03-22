import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/api-calls';



const StarShipDetails= () => {

  const [starshipDetails, setStarshipDetails] = useState({})
  
  let location = useLocation()

  useEffect(()=>{
    getDetails(location.state.starship.url)
    .then(starshipDetails => setStarshipDetails(starshipDetails))
  })

  return ( 
    <>
    <div className='starship-container'>
      <div id='starshipDiv'>
      {starshipDetails.name ?
        <>
        <h3>NAME: {starshipDetails.name}</h3>
        <h3>MODEL: {starshipDetails.model}</h3>
        <a className='return' href="/">RETURN </a>
        </>
        :
        <>
        <h2>Loading Starships</h2>
        </>
        }
      </div>
    </div>
    </>
  );
}

export default StarShipDetails;