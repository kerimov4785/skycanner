import React, { useContext, useEffect, useState } from 'react'
import Transfer from '../components/Transfer'
import TimePicker from '../components/TimePicker'
import AviaCompany from '../components/AviaCompany'
import { useLocation } from 'react-router-dom'
import { AllContext } from '../context/DataContext'
import Ticket2Way from '../components/Ticket2Way'
import Ticket1Way from '../components/Ticket1Way'
import Banner1 from '../components/Banner1'
import Banner2 from '../components/Banner2'

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
    let allAirlines = []
    let [filterStatus,setFilterStatus] = useState(false)
    let [windowWidth,setWindowWidth] = useState(window.innerWidth)
    flights.map(item => item.cities.map(item => item.flights.filter(item => item.to == toCity).map(item => allAirlines.push(item.airline))
    ))
    let airlines = [...new Set(allAirlines)]
    let [checkedAirline, setCheckedAirline] = useState([])
    let [checkedWayType, setCheckedWayType] = useState(['Прямой'])
    const [value, setValue] = useState([0, 1439]);
    const [value2, setValue2] = useState([0, 1439]);
    
    useEffect(() => {
        setCheckedAirline(airlines)
    }, [location])
    const allTicket = fromCountry == 'Azerbaijan' ? tripType == 'Туда-обратно' ?
        flights.find(item => item.country == toCountry).cities
            .find(item => item.name == toCity).flights
            .filter(item => item.from == fromCity && item.roundTrip && item.departure.slice(8, 10) == firstDate.slice(8, 10) && item.roundTrip.departure.slice(8, 10) == secondDate.slice(8, 10)) :
        flights.find(item => item.country == toCountry).cities
            .find(item => item.name == toCity).flights
            .filter(item => item.from == fromCity && !item.roundTrip && item.departure.slice(8, 10) == firstDate.slice(8, 10)) : []
    const filteredAllTicket = allTicket.filter(item => checkedAirline.includes(item.airline)
        && checkedWayType.includes('Прямой'))
        .filter(item => isTimeInRange(item.departure.slice(11), value)
            && (tripType == 'Туда-обратно' ? isTimeInRange(item.roundTrip.departure.slice(11), value2) : true))


    function timeToMinutes(timeStr) {
        const [h, m] = timeStr.split(":").map(Number);
        return h * 60 + m;
    }

    function isTimeInRange(timeStr, range) {
        const time = timeToMinutes(timeStr);
        const [start, end] = range;
        return time >= start && time <= end;
    }

    window.onresize = function () {
        setWindowWidth(window.innerWidth)
    }
    if(filterStatus){
        document.body.style.overflow = 'hidden'
    }
    else{
        document.body.style.overflow = 'initial'
    }
    return (
        <>
            <div className='bg-tickets'>
                <div className='container2'>
                    <section className='tickets-section' >
                        <div className='tickets-filter' style={{display: windowWidth > 1030 ? 'block' : filterStatus  ? 'block' : 'none' ,
                            overflowY: windowWidth < 1030 ? "scroll" : ''
                        }} >
                            <div className='ticket-mob-title'>
                                <h3>Фильтры</h3>
                                <p onClick={() => setFilterStatus(false)} >Готово</p>
                            </div>
                            <p className='minitext'>Показать весь месяц</p>
                            <button>Остелижать цены</button>
                            <Transfer checkedWayType={checkedWayType} setCheckedWayType={setCheckedWayType} />
                            <TimePicker tripType={tripType} value={value} value2={value2} setValue={setValue} setValue2={setValue2} />
                            <AviaCompany airlines={airlines} checkedAirline={checkedAirline} setCheckedAirline={setCheckedAirline} />
                        </div>
                        <div className='ticket-info' >
                            <div className='info-mobile-title'>
                                <h3>Авиабилеты</h3>
                                <p onClick={() => setFilterStatus(true)} >Фильтр</p>
                            </div>
                            <p className='minitext'>За багаж может взиматься дополнительная плата</p>
                            <div id='info' >
                                <h5>{`Результаты: ${filteredAllTicket.length} из ${8}`}</h5>
                            </div>
                            <div className='ticket-box'>
                                {filteredAllTicket.length != 0 ? filteredAllTicket
                                    .map(item =>
                                        tripType == 'Туда-обратно' ? <Ticket2Way toCity={toCity} toCountry={toCountry} title1={title1} title2={title2} key={item.id} ticketInfo={item} /> : <Ticket1Way toCity={toCity} toCountry={toCountry} title1={title1} title2={title2} key={item.id} ticketInfo={item} />
                                    ) : <div className='none' ><h3>No flights found for these requests :(</h3></div>}
                            </div>
                        </div>
                        <div className='banners' >
                            <Banner1 />
                            <Banner2 tripType={tripType} firstDate={firstDate} secondDate={secondDate} toCity={toCity} />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Tickets