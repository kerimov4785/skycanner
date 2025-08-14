import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React, { useContext } from 'react'
import { FaChevronLeft } from 'react-icons/fa6'
import { AllContext } from '../context/DataContext'

function MobileDate1Car({ setMobileDate1 }) {
    let { date1Car, setDate1Car } = useContext(AllContext)

    function handleValue(newvalue) {
        setDate1Car(newvalue)
    }

    return (
        <div className='mobileDate'>
            <div style={{width:'100%'}} >
                <FaChevronLeft onClick={() => setMobileDate1(false)} />
                <h3>Выбрать даты</h3>
                <div className='mobileDateInputs'>
                    <div >
                        <p>Дата получения</p>
                        <h5>{date1Car == '' ? '2025-08-10' : date1Car.format('YYYY-MM-DD')}</h5>
                    </div>
                </div>
                <div style={{width:'100%'}} >
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
                        }} value={date1Car != '' ? date1Car : null} onChange={handleValue} />
                    </LocalizationProvider>
                </div>
            </div>
            <div className='buttonSaveDate buttonMobile ' >Применить</div>
        </div>
    )
}

export default MobileDate1Car