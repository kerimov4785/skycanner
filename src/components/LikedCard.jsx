import React, { useContext, useState } from 'react'
import { AllContext } from '../context/DataContext';
import { FaHeart } from 'react-icons/fa';
import { getMonthName } from './FlightFilter';
import { addLiked } from '../services/flightServices';

function LikedCard({ ticket,confirmStatus,setConfirmStatus,setTicketID }) {
    let { flights } = useContext(AllContext)
    let departure = ticket.departure.slice(11)
    let arrival = ticket.arrival.slice(11)
    let roundDepartureTime = ticket?.roundTrip?.departure?.slice(11)
    let roundArrivalTime = ticket?.roundTrip?.arrival?.slice(11)
    let departureDay = ticket.departure.slice(8, 10)
    let departureMonth = getMonthName(ticket.departure.slice(5, 7))
    let roundDepartureDay = ticket?.roundTrip?.departure?.slice(8, 10)
    let roundDepartureMonth = getMonthName(ticket?.roundTrip?.departure?.slice(5, 7))
    let image = flights.find(item => item.cities.some(item => item.name == ticket.to)).cities.find(item => item.name == ticket.to).image
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

    if(confirmStatus){
        document.body.style.overflow = 'hidden'
    }
    else{
        document.body.style.overflow = 'initial'
    }
    return (
        <div className='liked-card'>
            <span className='like' onClick={() => (setConfirmStatus(true) , setTicketID(ticket.id) ) } >
                <FaHeart fill='#0062e3' size={18} />
            </span>
            <img src={`/assets/${image}`} alt="" />
            <div>
                <div className='liked-card-title' >
                    <h4>{ticket.from}</h4>
                    <div></div>
                    <h4>{ticket.to}</h4>
                </div>
                <div className="about-flight">
                    <div>
                        <h5>{departure} - {arrival} </h5>
                        <p>{ticket.airline}</p>
                    </div>
                    <div>
                        <h6>Прямой рейс</h6>
                        <p className='duration' >{getFlightDuration(departure, arrival)}</p>
                    </div>
                </div>
                {ticket.roundTrip ?
                    <div className="about-flight second">
                        <div>
                            <h5>{roundDepartureTime} - {roundArrivalTime} </h5>
                            <p>{ticket.airline}</p>
                        </div>
                        <div>
                            <h6>Прямой рейс</h6>
                            <p className='duration' >{getFlightDuration(roundDepartureTime, roundArrivalTime)}</p>
                        </div>
                    </div> : null}
            </div>
            <div className='about-flight2' >
                <h5>{departureDay} {departureMonth} {ticket.roundTrip ? `- ${roundDepartureDay} ${roundDepartureMonth}` : null}</h5>
                <p>Взрослых:1,Эконом</p>
            </div>
        </div>
    )
}

export default LikedCard