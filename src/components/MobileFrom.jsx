import React, { useContext, useRef } from 'react'
import { FaChevronLeft, FaFlag, FaPlane } from 'react-icons/fa6'
import FromPicker from './FromPicker'
import { AllContext } from '../context/DataContext'
import toast from 'react-hot-toast'

function MobileFrom({ setMobileFrom }) {
    let fromMob = useRef(null)
    let { flights, fromPlace, toPlace, setFromCity, setFromPlace } = useContext(AllContext) // AllFlights DATA    
    function selectFrom(name) {
        if (toPlace != name) {
            setFromPlace(name)
            setMobileFrom(false)
        } else {
            toast.error('Select another country')
        }

    }
    return (
        <div className='mobileFrom' >
            <FaChevronLeft onClick={() => setMobileFrom(false)} />
            <h3>Выберите, откуда вылетаете</h3>
            <div className='mobileFromInput' onClick={() => (fromMob.current.focus())}  >
                <p>Откуда:</p>
                <input onChange={(e) => setFromPlace(e.target.value)} value={fromPlace} ref={fromMob} type="text" placeholder='Страна,город или аэропорт' />
            </div>
            <div className='fromMobileCountry' >
                {flights.filter(item => item.country.toLowerCase().includes(fromPlace.toLowerCase())).map(item => (
                    <div key={item.id} onClick={() => selectFrom(item.country)} >
                        <FaFlag color='#757c85ff' size={18} />
                        <div>
                            <h4>{item.country} {item.title}</h4>
                            <p>{item.country}</p>
                        </div>
                    </div>
                ))}
                {flights.map(item => (
                    item.cities.filter(item2 => item2.name.toLowerCase().includes(fromPlace.toLowerCase())).map((item2, i) => (
                        <div key={i} onClick={() => selectFrom(item.country, item2.name)} >
                            <FaPlane color='#757c85ff' size={18} />
                            <div>
                                <h4>{item2.name}</h4>
                                <p>{item.country}</p>
                            </div>
                        </div>
                    ))
                ))}
            </div>
        </div>
    )
}

export default MobileFrom