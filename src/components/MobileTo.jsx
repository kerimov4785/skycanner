import React, { useContext, useRef } from 'react'
import { FaChevronLeft, FaEarthAmericas, FaFlag, FaPlane } from 'react-icons/fa6'
import FromPicker from './FromPicker'
import { AllContext } from '../context/DataContext'
import toast from 'react-hot-toast'

function MobileTo({ setMobileTo }) {
    let fromMob = useRef(null)
    let { flights, fromPlace,toPlace,setToCity, setToPlace } = useContext(AllContext) // AllFlights DATA    
    function selectFrom(name, city) {
        if (fromPlace != name) {
            setToPlace(name)
            setMobileTo(false)
            if (city != undefined) {
                setToCity(city)
            }
            else(
                setToCity('')
            )
        }
        else{
            toast.error('Select another country')
        }
    }
    return (
        <div className='mobileFrom' >
            <FaChevronLeft onClick={() => setMobileTo(false)} />
            <h3>Выберите направление</h3>
            <div className='mobileFromInput' onClick={() => (fromMob.current.focus())}  >
                <p>Откуда:</p>
                <input onChange={(e) => setToPlace(e.target.value)} value={toPlace} ref={fromMob} type="text" placeholder='Страна,город или аэропорт' />
            </div>
            <div className='fromMobileCountry' >
                <div className='allCountryButton' onClick={() => selectFrom('Везьде')} >
                    <FaEarthAmericas color='#0062e3' size={18} />
                    <h3>Поиск везьде</h3>
                </div>
                {flights.filter(item => item.country.toLowerCase().includes(toPlace.toLowerCase())).map(item => (
                    <div key={item.id} onClick={() => selectFrom(item.country)} >
                        <FaFlag color='#757c85ff' size={18} />
                        <div>
                            <h4>{item.country} {item.title}</h4>
                            <p>{item.country}</p>
                        </div>
                    </div>
                ))}
                {flights.map(item => (
                    item.cities.filter(item2 => item2.name.toLowerCase().includes(toPlace.toLowerCase()) ).map((item2, i) => (
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

export default MobileTo
