import { DigitalClock, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import React, { useContext } from 'react'
import { AllContext } from '../context/DataContext';
function TimePicker2Car({setTime2PickerStatus}) {
    let {time2Car, setTime2Car } = useContext(AllContext)

    function handlevalue(value) {
        setTime2PickerStatus(false)
        setTime2Car(value)
    }

    return (
        <div className='timePicker' onClick={(e) => e.stopPropagation()}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DigitalClock', 'MultiSectionDigitalClock']}>
                    <DigitalClock value={time2Car != '' ? time2Car : null} onChange={handlevalue} sx={{ height: '200px' }} />
                </DemoContainer>
            </LocalizationProvider>
        </div>
    )
}

export default TimePicker2Car