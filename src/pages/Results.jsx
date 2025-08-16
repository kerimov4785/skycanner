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
import Company from '../components/Company'

function Results() {
    let location = useLocation()
    let params = new URLSearchParams(location.search)
    let { cars } = useContext(AllContext)
    let from = params.get('from')
    let date1 = params.get('date1')
    let time1 = params.get('time1')
    let date2 = params.get('date2')
    let time2 = params.get('time2')
    let [checkedCompany, setCheckedCompany] = useState([])
    let [checkedTransmission, setCheckedTransmission] = useState(['Автоматическая','Механическая'])
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)
    let [filterStatus, setFilterStatus] = useState(false)
    let filteredCars = cars.find(item => item.city == from).cars.sort((a, b) =>
        a.price_per_day - b.price_per_day
    )
    let min = filteredCars[0].price_per_day
    let max = filteredCars[4].price_per_day
    let company = filteredCars.map(item => item.rental_company)
    let allCompany = [...new Set(company)]

    useEffect(() => {
        setCheckedCompany(allCompany)
    }, [location])
    window.onresize = function () {
        setWindowWidth(window.innerWidth)
    }
    const [value, setValue] = useState([]);
    useEffect(() => {
        setValue([min, max])
    }, [])
    let allFilteredCars = filteredCars.filter(item => 
        checkedCompany.includes(item.rental_company) && 
        +item.price_per_day <= value[1] && +item.price_per_day >= value[0] && checkedTransmission.includes(item.transmission[0]) )

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
                            <Transmisson checkedTransmission={checkedTransmission} setCheckedTransmission={setCheckedTransmission} />
                            <PriceCar min={min} max={max} value={value} setValue={setValue} />
                            <Company allCompany={allCompany} checkedCompany={checkedCompany} setCheckedCompany={setCheckedCompany} />
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
                                {allFilteredCars.length != 0 ? allFilteredCars
                                    .map(item =>
                                        <CarCard from={from} key={item.id} carInfo={item} />
                                    ) : <div className='none' ><h3>No cars found for these requests :(</h3></div>}
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