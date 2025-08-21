import React, { useContext, useState } from 'react'
import { FaArrowRight, FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoAirplane } from "react-icons/io5";
import { AllContext } from '../context/DataContext';
import { addLiked, getLiked } from '../services/flightServices';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

function Ticket2Way({toCity, toCountry, title1, title2, ticketInfo }) {
  let location = useLocation()
  let departureTime = ticketInfo.departure.slice(11)
  let arrivalTime = ticketInfo.arrival.slice(11)
  let roundDepartureTime = ticketInfo.roundTrip.departure.slice(11)
  let roundArrivalTime = ticketInfo.roundTrip.arrival.slice(11)
  let navigate = useNavigate()
  let { user, likedTickets, setLikedTickets } = useContext(AllContext)

  function goToDetail(id) {
    console.log(id)
    navigate(`${location.pathname}${id}?country=${toCountry}&&city=${toCity}&&title1=${title1}&&title2=${title2}`)
  }

  function toLike(ticket) {
    if (!user.email) {
      navigate('/signIn')
      return
    }
    let updated
    if (!likedTickets.some(item => item.id == ticket.id)) {
      updated = [...likedTickets, ticket]
      toast('Ticket added to favorites', {
        className: 'custom-toast',
        position: 'bottom-center'
      })
    }
    else {
      updated = likedTickets.filter(item => item.id != ticket.id)
    }
    setLikedTickets(updated)
    addLiked(user.id, updated)
  }


  function getFlightDuration(start, end) {
    let [startH, startM] = start.split(':').map(Number);
    let [endH, endM] = end.split(':').map(Number);

    let startMinutes = startH * 60 + startM;
    let endMinutes = endH * 60 + endM;

    if (endMinutes < startMinutes) {
      endMinutes += 24 * 60;
    }

    let duration = endMinutes - startMinutes;
    let hours = Math.floor(duration / 60);
    let minutes = duration % 60;

    return `${hours} ч ${minutes} мин`;
  }
  return (
    <div className="flight-card">
      <img src={`${ticketInfo?.image}`} alt={`${ticketInfo.airline}`} />
      <div className='card-way2-col-1'>
        <div className='way2-line' >
          <img src={`${ticketInfo?.image}`} alt={`${ticketInfo.airline}`} />
          <div>
            <div>
              <h5>{departureTime}</h5>
              <p>{title1}</p>
            </div>
            <div>
              <div className='ticket-line'>
                <IoAirplane color='#c4c4c4' />
                <p>{getFlightDuration(departureTime, arrivalTime)}</p>
                <h5>Прямой</h5>
              </div>
            </div>
            <div>
              <h5>{arrivalTime}</h5>
              <p>{title2}</p>
            </div>
          </div>
        </div>
        <div className='way2-line'>
          <img src={`${ticketInfo?.image}`} alt={`${ticketInfo.airline}`} />
          <div>
            <div>
              <h5>{roundDepartureTime}</h5>
              <p>{title2}</p>
            </div>
            <div>
              <div className='ticket-line'>
                <IoAirplane color='#c4c4c4' />
                <p>{getFlightDuration(roundDepartureTime, roundArrivalTime)}</p>
                <h5>Прямой</h5>
              </div>
            </div>
            <div>
              <h5>{roundArrivalTime}</h5>
              <p>{title1}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='card-col-2' >
        <h3 className='ticket-price'>{ticketInfo.price} ₼</h3>
        <button onClick={() => goToDetail(ticketInfo.id)} >Посмотреть <FaArrowRight /> </button>
      </div>
      <div className='like' onClick={() => toLike(ticketInfo)}  >
        {user.id ? likedTickets.some(item => item.id == ticketInfo.id) ? <FaHeart size={21} color='#0062e3' /> : <FaRegHeart size={21} /> : <FaRegHeart size={21} />}
      </div>
    </div>
  )
}

export default Ticket2Way