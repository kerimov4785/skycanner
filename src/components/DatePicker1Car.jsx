import React from 'react'
import { useContext } from 'react'
import { AllContext } from '../context/DataContext'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers'

function DatePicker1Car({setDate1PickerStatus}) {
    let { date1Car, setDate1Car } = useContext(AllContext)
     
    function handleChange(newValue) {
        setDate1Car(newValue)        
    };
    return (
        <>
            <div className='dropdownDate1' onClick={(e) => e.stopPropagation()}>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DateCalendar value={date1Car != '' ? date1Car : null}  onChange={handleChange} />
                </LocalizationProvider>
                <div className='buttonSaveDate' onClick={() => setDate1PickerStatus(false)} >Применить</div>
            </div>
        </>
    )
}

export default DatePicker1Car