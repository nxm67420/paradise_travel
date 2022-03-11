//Component imports
import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

//style imports
import '../css/TripList.css'

//Start of Application
export default function TripList() {
    
    //Variables
    //const [trips, setTrips] = useState([])
    const [url, setUrl] = useState('http://localhost:3000/trips')
    const { data: trips, isLoading : loading, error} = useFetch(url);



    //Fill In Array w/ JSON
    //Perform Fetch Request 
    /* const fetchTrips = useCallback(async () => { 
        const response = await fetch(url)
        const json = await response.json()
        setTrips(json)
    }, [url])

    useEffect(() => {fetchTrips()}, [fetchTrips])
    console.log(trips) */

    //1st Way
    //Fetch Data When Component 1st Runs
    /* useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => setTrips(json))
    }, [url]) */
    
//Returned Output
  return (
    <div className='trip-list'>
          <h2 >Trip List</h2>
          {loading && <div>Loading Trips...</div>}
          {error && <div>{error}</div> }
          <ul>
              {trips /*Only if we have value for trips */ && trips.map((trip) => (
                  <li key={trip.id}>
                      <h3 style={{color:'http://localhost:3000/trips' ? "black" : "pink" }}>{trip.title}</h3>
                      <p>{trip.price}</p>
                  </li>
              ))}
          </ul>
          <div className='filters'>
              <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>Europe</button>
              <button onClick={() => setUrl('http://localhost:3000/trips')}>All Trips</button>
          </div>
    </div>
  )
}
