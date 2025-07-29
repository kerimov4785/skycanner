import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import toast from 'react-hot-toast';

function DatePicker1({tripType, date1, date2, setDate1, setDatePicker1 }) {

    function handleChange(newValue) {
        if (((date2.$M < newValue.$M) || (date2.$M == newValue.$M && date2.$D <= newValue.$D )) && tripType == 'Туда-обратно' ) {
            toast.error('Select date earlier than the return date')
            return
        }
        setDate1(newValue)
    };
    return (
        <>
            <div className='dropdownDate1' onClick={(e) => e.stopPropagation()}>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DateCalendar value={date1 != 'Добавьте дату' ? date1 : null} onChange={handleChange} />
                </LocalizationProvider>
                <div className='buttonSaveDate' onClick={() => (setDatePicker1(false))} >Применить</div>
            </div>
        </>
    )
}

export default DatePicker1