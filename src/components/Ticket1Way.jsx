import React from 'react'
import { IoAirplane } from "react-icons/io5";

function Ticket1Way({ title1, title2, ticketInfo }) {
    let departureTime = ticketInfo.departure.slice(11)
    let arrivalTime = ticketInfo.arrival.slice(11)
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
            <div className='card-col-1' >
                <img src={`${ticketInfo?.image}`} alt={`${ticketInfo.airline}`} />
                <div>
                    <div>
                        <h5>{departureTime}</h5>
                        <p>{title1}</p>
                    </div>
                    <div>
                        <div className='ticket-line'>
                            <IoAirplane color='#c4c4c4' />
                            <p>{getFlightDuration(departureTime,arrivalTime)}</p>
                            <h5>Прямой</h5>
                        </div>
                    </div>
                    <div>
                        <h5>{arrivalTime}</h5>
                        <p>{title2}</p>
                    </div>
                </div>
            </div>
            <div className='card-col-2' >
            </div>
        </div>
    )
}

export default Ticket1Way