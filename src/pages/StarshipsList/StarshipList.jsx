import { useState, useEffect } from 'react';
import { getAllStarships } from '../../services/api-calls';
import { Link } from 'react-router-dom';

const StarShipList = (props) => {

  const [starships, setStarships] = useState([])

  useEffect(() => {
    getAllStarships()
    .then(starshipData => setStarships(starshipData.results))
  }, [])
  return ( 
    <>
    <div>
      <div className='starship-container'>
        {starships.map((starship) => (
            <Link  
              to='/starship' 
              state={{ starship }}
              key={starship.model}
            >
              <div id='starshipsDiv' >
              {starship.name}
              </div>
            </Link>
            ))}
      </div>
    </div>
    </>
  );
}

export default StarShipList;