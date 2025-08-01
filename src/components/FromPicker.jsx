import React, { useContext } from 'react'
import { AllContext } from '../context/DataContext'
import { FaFlag, FaPlane } from 'react-icons/fa6'
import toast from 'react-hot-toast'

function FromPicker({setFromPickerStatus }) {
    let { flights,toPlace,fromPlace, setFromCity, setFromPlace} = useContext(AllContext) // AllFlights DATA    
    function selectFrom(name) {
        if (toPlace != name) {
            setFromPlace(name)
            setFromPickerStatus(false)
        }else{
            toast.error('Select another country')
        }

    }
    if (!flights) {
        return
    }
    return (
        <div className='fromDropdown' onClick={(e) => e.stopPropagation()} >
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
    )
}

export default FromPicker