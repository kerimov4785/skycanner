import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import React, { useContext } from 'react'
import { AllContext } from '../context/DataContext'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function DatePicker2Car({setDate2PickerStatus}) {
    let { date2Car, setDate2Car } = useContext(AllContext)

    function handleChange(newValue) {
        setDate2Car(newValue)
    };
    return (
        <>
            <div className='dropdownDate2' onClick={(e) => e.stopPropagation()}>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DateCalendar value={date2Car != '' ? date2Car : null} onChange={handleChange} />
                </LocalizationProvider>
                <div className='buttonSaveDate' onClick={() => setDate2PickerStatus(false) } >Применить</div>
            </div>
        </>
    )
}

export default DatePicker2Car