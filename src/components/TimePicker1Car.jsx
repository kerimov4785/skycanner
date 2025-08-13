import { DigitalClock, LocalizationProvider, MultiSectionDigitalClock } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import React, { useContext } from 'react'
import { AllContext } from '../context/DataContext';

function TimePicker1Car({setTime1PickerStatus}) {
    let { time1Car, setTime1Car } = useContext(AllContext)

    function handlevalue(value) {
        setTime1Car(value)
        setTime1PickerStatus(false)
    }

    return (
        <div className='timePicker' onClick={(e) => e.stopPropagation()} >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DigitalClock', 'MultiSectionDigitalClock']}>
                    <DigitalClock value={time1Car != '' ? time1Car : null} onChange={handlevalue} sx={{ height: '200px' }} />
                </DemoContainer> 
            </LocalizationProvider>
        </div>
    )
}

export default TimePicker1Car