import React, { useContext, useEffect } from 'react'
import { AllContext } from '../context/DataContext'
import { getMonthName } from '../components/FlightFilter'
import Card from '../components/Card'
import { useLocation, useNavigate } from 'react-router-dom'

function Transport() {
  let { flights, tripType } = useContext(AllContext)
  const location = useLocation();
  const params = new URLSearchParams(location.search)
  let fromCountry = params.get('from')
  let toCountry = params.get('to')
  let firstDate = params.get('date1')
  let secondDate = params.get('date2')
  let fromCity = params.get('fromCity')
  let toCity = params.get('toCity')

  console.log(toCity);

  let cityFlights
  if (toCountry == 'Везьде') {
    cityFlights = flights?.flatMap(item => item)
  }
  else {
    cityFlights = flights?.find(item => (item.country == toCountry
      && fromCountry == 'Azerbaijan'))
  }
  if (!cityFlights) {
    return 'salam'
  }
  const firstDay = firstDate.slice(8, 10);
  const firstMonth = +firstDate.slice(5, 7);
  const secondDay = secondDate.slice(8, 10);
  const secondMonth = +secondDate.slice(5, 7);


  function filterCity(item) {
    if (tripType == 'В одну сторону') {
      return item.flights.some(item => item.departure.slice(8, 10) == firstDay
        && item.roundTrip
        && item.departure.slice(5, 7) == firstMonth)
    }
    else {
      return item.flights.some(item => item.departure.slice(8, 10) == firstDay
        && item.roundTrip
        && item.departure.slice(5, 7) == firstMonth
        && item.roundTrip.departure.slice(8, 10) == secondDay
        && item.roundTrip.departure.slice(5, 7) == secondMonth)
    }
  }

  return (
    <div className='bg-city' >
      <div className='container' >
        <div className='citiesSection'>
          {!secondDate ?
            <h2>Искать: {toCountry}, {firstDay} {getMonthName(firstMonth)}</h2> :
            <h2>{toCountry} с {firstDay} {getMonthName(firstMonth)} по {secondDay} {getMonthName(secondMonth)}
            </h2>
          }
          <div className='allCity'>
            {
              toCountry == 'Везьде'
                ? cityFlights.map(item => item.cities.filter(item => filterCity(item)).map((item2, i) => <Card key={i} city={item2} />)).slice(1)
                : cityFlights.cities.filter(item => filterCity(item)).map((item, i) => <Card key={i} city={item} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transport