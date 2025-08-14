import React, { useContext, useRef } from 'react'
import { FaChevronLeft, FaFlag, FaPlane } from 'react-icons/fa6'
import FromPicker from './FromPicker'
import { AllContext } from '../context/DataContext'
import toast from 'react-hot-toast'

function MobileFromCard({ setMobileFromCar }) {
    let fromMob = useRef(null)
    let { cars, fromPlaceCar, setFromPlaceCar } = useContext(AllContext) // AllFlights DATA    
    function selectFromCar(name) {
        setFromPlaceCar(name)
        setMobileFromCar(false)
    }
    return (
        <div className='mobileFrom' >
            <FaChevronLeft onClick={() => setMobileFromCar(false)} />
            <h3>Выберите, откуда арендуете</h3>
            <div className='mobileFromInput' onClick={() => (fromMob.current.focus())}  >
                <p>Откуда:</p>
                <input onChange={(e) => setFromPlaceCar(e.target.value)} value={fromPlaceCar} ref={fromMob} type="text" placeholder='Город или аэропорт' />
            </div>
            <div className='fromMobileCountry' >
                {cars.filter((item) => item.country.toLowerCase().includes(fromPlaceCar.toLowerCase())).map((item,id) => (
                    <div key={id} onClick={() => selectFromCar(item.city)} >
                        <FaFlag color='#757c85ff' size={18} />
                        <div>
                            <h4>{item.city}</h4>
                            <p>{item.country}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MobileFromCard