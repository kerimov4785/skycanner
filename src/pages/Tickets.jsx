import React, { useContext } from 'react'
import Transfer from '../components/Transfer'
import TimePicker from '../components/TimePicker'
import AviaCompany from '../components/AviaCompany'
import { useLocation } from 'react-router-dom'
import { AllContext } from '../context/DataContext'
import Ticket2Way from '../components/Ticket2Way'
import Ticket1Way from '../components/Ticket1Way'

function Tickets() {
    let { flights } = useContext(AllContext)
    const location = useLocation();
    const params = new URLSearchParams(location.search)
    let fromCountry = params.get('from')
    let toCountry = params.get('to')
    let firstDate = params.get('date1')
    let secondDate = params.get('date2') ? params.get('date2') : ''
    let fromCity = params.get('fromCity')
    let toCity = params.get('toCity')
    let tripType = params.get('tripType')
    let title1 = params.get('title1')
    let title2 = params.get('title2')

    const allTicket = fromCountry == 'Azerbaijan' ? tripType == 'Туда-обратно' ?
        flights.find(item => item.country == toCountry).cities
            .find(item => item.name == toCity).flights
            .filter(item => item.from == fromCity && item.roundTrip && item.departure.slice(8, 10) == firstDate.slice(8, 10) && item.roundTrip.departure.slice(8, 10) == secondDate.slice(8, 10)) :
        flights.find(item => item.country == toCountry).cities
            .find(item => item.name == toCity).flights
            .filter(item => item.from == fromCity && !item.roundTrip && item.departure.slice(8, 10) == firstDate.slice(8, 10)) : []
    return (
        <>
            <div className='bg-tickets'>
                <div className='container2'>
                    <section className='tickets-section' >
                        <div className='tickets-filter' >
                            <p className='minitext'>Показать весь месяц</p>
                            <button>Остелижать цены</button>
                            <Transfer />
                            <TimePicker />
                            <AviaCompany toCity={toCity} />
                        </div>
                        <div className='ticket-info' >
                            <p className='minitext'>За багаж может взиматься дополнительная плата</p>
                            <div id='info' >
                                <h5>{`Результаты: ${allTicket.length} из ${8}`}</h5>
                            </div>
                            <div className='ticket-box'>
                                {allTicket.length != 0 ? allTicket.map(item =>
                                    tripType == 'Туда-обратно' ? <Ticket2Way title1={title1} title2={title2} key={item.id} ticketInfo={item} /> : <Ticket1Way title1={title1} title2={title2} key={item.id} ticketInfo={item} />
                                ) : <div className='none' ><h3>No flights found for these requests :(</h3></div>}
                            </div>
                        </div>
                        <div>

                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Tickets