import React, { useContext } from 'react'
import { AllContext } from '../context/DataContext'
import { FaCity, FaFlag } from 'react-icons/fa6'

function Car_FromPicker({setFromPickerStatus}) {
  let { cars, fromPlaceCar, setFromPlaceCar } = useContext(AllContext)
  return (
    <div className='fromDropdown dropwidth ' onClick={(e) => e.stopPropagation()}>
      {cars.filter(item => (item.city.toLowerCase().startsWith(fromPlaceCar.toLowerCase()) || item.country.toLowerCase().startsWith(fromPlaceCar.toLowerCase()) )).map((item, i) => (
        <div key={i} onClick={() => (setFromPlaceCar(item.city) , setFromPickerStatus(false)  )} >
          <FaCity color='#757c85ff' size={18} />
          <div>
            <h4>{item.city}</h4>
            <p>{item.country}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Car_FromPicker