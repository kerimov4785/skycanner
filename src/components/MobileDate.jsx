import React, { useContext, useState } from 'react'
import { FaAngleDown, FaArrowRight, FaChevronLeft, FaRotate } from 'react-icons/fa6'
import DataContext, { AllContext } from '../context/DataContext'
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import toast from 'react-hot-toast'

function MobileDate({ setMobileDate }) {
    let { tripType, setTripType, date1, setDate1, date2, setDate2 } = useContext(AllContext)
    let [mobileTypeStatus, setMobileTypeStatus] = useState(false)
    let [date1IsActive, setDate1IsActive] = useState(true)
    let [date2IsActive, setDate2IsActive] = useState(false)
    function handleChange(newValue) {
        if (((date2.$M < newValue.$M) || (date2.$M == newValue.$M && date2.$D <= newValue.$D)) && tripType == 'Туда-обратно') {
            toast.error('Select date earlier than the return date')
            return
        }
        if (tripType == 'В одну сторону') {
            setDate1(newValue)
            return
        }
        setDate1IsActive(false)
        setDate2IsActive(true)
        setDate1(newValue)
    }
    function handleChange2(newValue) {
        if ((newValue.$M < date1.$M) || (newValue.$M == date1.$M && newValue.$D <= date1.$D)) {
            toast.error('Select a date later than the flight date')
            return
        }
        if (date1.$D == undefined) {
            toast.error('Select your flight date')
            setDate1IsActive(true)
            setDate2IsActive(false)
            return
        }
        setDate1IsActive(true)
        setDate2IsActive(false)
        setDate2(newValue)
    };
    return (
        <>
            {mobileTypeStatus && window.innerWidth <= 768 ? <div className='mobileTypeDropdown'>
                <FaChevronLeft onClick={() => setMobileTypeStatus(false)} />
                <h3>Тип поездки</h3>
                <div >
                    <p onClick={() => (setTripType('В одну сторону'), setMobileTypeStatus(false),setDate1IsActive(true),setDate2IsActive(false))}>В одну сторону <FaArrowRight /> </p>
                    <p onClick={() => (setTripType('Туда-обратно'), setMobileTypeStatus(false))}>Туда-обратно<FaRotate /> </p>
                </div>
            </div> : null}
            <div className='mobileDate' style={{ filter: mobileTypeStatus ? "brightness(0.2)" : null }} >
                <FaChevronLeft onClick={() => setMobileDate(false)} />
                <h3>Выбрать даты</h3>
                <div className='tripTypeMobile' onClick={() => (setMobileTypeStatus(true))} >
                    <p>{tripType}</p>
                    <FaAngleDown size={16} color='#0c0c0c' />
                </div>
                <div className='mobileDateInputs'>
                    <div onClick={() => { setDate1IsActive(true), setDate2IsActive(false) }} style={{ borderColor: date1IsActive ? '#0062e3' : '#eff3f8' }} >
                        <p>Туда</p>
                        <h5>{date1 == 'Добавьте дату' ? date1 : date1?.format('YYYY-MM-DD')}</h5>
                    </div>
                    {tripType == 'Туда-обратно' ?
                        <div onClick={() => { setDate2IsActive(true), setDate1IsActive(false) }} style={{ borderColor: date2IsActive ? '#0062e3' : '#eff3f8' }}>
                            <p>Обратно</p>
                            <h5>{date2 == 'Добавьте дату' ? date2 : date2?.format('YYYY-MM-DD')}</h5>
                        </div> : null}
                </div>
                <div>
                    {date1IsActive ?
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
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
                            }} value={date1 != 'Добавьте дату' ? date1 : null} onChange={handleChange} />
                        </LocalizationProvider> :
                        date2IsActive && tripType == 'Туда-обратно' ?
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
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
                                }} value={date2 != 'Добавьте дату' ? date2 : null} onChange={handleChange2} />
                            </LocalizationProvider> : null
                    }
                </div>
                <div className='buttonSaveDate' onClick={() => setMobileDate(false)} >Применить</div>
            </div>
        </>
    )
}

export default MobileDate