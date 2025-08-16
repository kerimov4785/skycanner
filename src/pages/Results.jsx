import React, { useContext, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import PlaceQuantity from '../components/PlaceQuantity'
import Transmisson from '../components/Transmisson'
import PriceCar from '../components/PriceCar'
import { AllContext } from '../context/DataContext'
import { useEffect } from 'react'
import CarCard from '../components/CarCard'
import Banner1 from '../components/Banner1'
import Banner3 from '../components/Banner3'

function Results() {
    let location = useLocation()
    let params = new URLSearchParams(location.search)
    let { cars } = useContext(AllContext)
    let from = params.get('from')
    let date1 = params.get('date1')
    let time1 = params.get('time1')
    let date2 = params.get('date2')
    let time2 = params.get('time2')
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)
    let [filterStatus, setFilterStatus] = useState(false)
    let filteredCars = cars.find(item => item.city == from).cars.sort((a, b) =>
        a.price_per_day - b.price_per_day
    )
    let min = filteredCars[0].price_per_day
    let max = filteredCars[4].price_per_day
    window.onresize = function () {
        setWindowWidth(window.innerWidth)
    }
    const [value, setValue] = useState([]);
    useEffect(() => {
        setValue([min, max])
    }, [])
    return (
        <>
            <div className='bg-tickets'>
                <div className='container2'>
                    <section className='tickets-section' >
                        <div className='tickets-filter' style={{
                            display: windowWidth > 1030 ? 'block' : filterStatus ? 'block' : 'none',
                            overflowY: windowWidth < 1030 ? "scroll" : ''
                        }} >
                            <div className='ticket-mob-title'>
                                <h3>Фильтры</h3>
                                <p onClick={() => setFilterStatus(false)} >Готово</p>
                            </div>
                            <PlaceQuantity />
                            <Transmisson />
                            <PriceCar min={min} max={max} value={value} setValue={setValue} />
                        </div>
                        <div className='car-info' >
                            <div className='info-mobile-title'>
                                <h3>Прокат автомобилей</h3>
                                <p onClick={() => setFilterStatus(true)} >Фильтр</p>
                            </div>
                            <div id='info' >
                                <h5>{`Результаты: ${filteredCars.length} из ${8}`}</h5>
                            </div>
                            <div className='ticket-box'>
                                {filteredCars.length != 0 ? filteredCars
                                    .map(item =>
                                        <CarCard from={from} key={item.id} carInfo={item} />
                                    ) : <div></div>}
                            </div>
                        </div>
                        <div className='banners' >
                            <Banner1 />
                            <Banner3 firstDate={date1} />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Results