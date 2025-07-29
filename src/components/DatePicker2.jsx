import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import toast from 'react-hot-toast';

function DatePicker2({ date1, date2, setDate2, setDatePicker2 }) {

    function handleChange(newValue) {
        if ((newValue.$M < date1.$M) || (newValue.$M == date1.$M && newValue.$D <= date1.$D ) ) {
            toast.error('Select a date later than the flight date')
            return
        }
        if (date1.$D == undefined) {
            toast.error('Select your flight date')
            setDatePicker2(false)
            return
        }
        setDate2(newValue)
    };
    return (
        <>
            <div className='dropdownDate2' onClick={(e) => e.stopPropagation()} >
                <LocalizationProvider  dateAdapter={AdapterDayjs}>
                    <DateCalendar  value={date2 != 'Добавьте дату' ? date2 : null} onChange={handleChange} />
                </LocalizationProvider>
                <div className='buttonSaveDate' onClick={() => (setDatePicker2(false))} >Применить</div>

            </div>
        </>
    )
}

export default DatePicker2