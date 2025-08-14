import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React, { useContext } from 'react'
import { FaChevronLeft } from 'react-icons/fa6'
import { AllContext } from '../context/DataContext'

function MobileDate2Car({ setMobileDate2 }) {
    let { date2Car, setDate2Car } = useContext(AllContext)

    function handleValue(newvalue) {
        setDate2Car(newvalue)
    }

    return (
        <div className='mobileDate'>
            <FaChevronLeft onClick={() => setMobileDate2(false)} />
            <h3>Выбрать даты</h3>
            <div className='mobileDateInputs'>
                <div >
                    <p>Дата получения</p>
                    <h5>{date2Car == '' ? '2025-08-10' : date2Car.format('YYYY-MM-DD')}</h5>
                </div>
            </div>
            <div >
                <LocalizationProvider dateAdapter={AdapterDayjs}  >
                    <DateCalendar sx={{
                        width: '100%',       // делаем ширину 100%
                        maxWidth: 'none',    // убираем ограничение
                        '.MuiDateCalendar-root': {
                            width: '100%',
                        },
                        '.css-1rl1vrc-MuiDayCalendar-header': {
                            justifyContent: 'space-between',
                        },
                        '.css-1pv2de5-MuiDayCalendar-weekContainer': {
                            justifyContent: 'space-between',
                        },
                        '.css-su1ucx-MuiYearCalendar-root': {
                            width: '100%'
                        }
                    }} value={date2Car != '' ? date2Car : null} onChange={handleValue} />
                </LocalizationProvider>
            </div>
            <div className='buttonSaveDate' onClick={() => setMobileDate2(false)} >Применить</div>
        </div>
    )
}

export default MobileDate2Car