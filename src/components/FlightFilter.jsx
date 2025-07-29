import React, { useContext, useRef, useState } from 'react'
import { FaArrowsRotate, FaAtlassian, FaRotate } from "react-icons/fa6";
import { FaAngleDown, FaAngleUp, FaArrowRight, } from 'react-icons/fa'
import { IoIosCloseCircle } from "react-icons/io";
import DatePicker1 from './DatePicker1';
import DatePicker2 from './DatePicker2';
import { AllContext } from '../context/DataContext';
import FromPicker from './FromPicker';
import ToPicker from './ToPicker';
import toast from 'react-hot-toast';
import MobileFrom from './MobileFrom';
import MobileTo from './MobileTo';
import MobileDate from './MobileDate';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    if (monthNumber) {
        return date.toLocaleString('en-EN', { month: 'long' }).slice(0, 3)
    }
    return ''
}
function FlightFilter() {
    let { flights, setFlights,
        tripType,
        setTripType,
        person,
        setPerson,
        fromPlace,
        setFromPlace,
        fromCity,
        setFromCity,
        toPlace,
        setToPlace,
        toCity,
        setToCity,
        date1,
        setDate1,
        date2,
        setDate2,
        searchTicket,
        setSearchTicket,
    } = useContext(AllContext) // AllFlights DATA    

    let [typeStatus, setTypeStatus] = useState(false)
    let [fromPickerStatus, setFromPickerStatus] = useState(false)
    let [toPickerStatus, setToPickerStatus] = useState(false)
    let [datePicker1, setDatePicker1] = useState(false)
    let [datePicker2, setDatePicker2] = useState(false)
    let [mobileFrom, setMobileFrom] = useState(false)
    let [mobileTo, setMobileTo] = useState(false)
    let [mobileDate, setMobileDate] = useState(false)

    let side1 = useRef(null)
    let side2 = useRef(null)
    let date1Box = useRef(null)
    let date1P = useRef(null)
    let date1H5 = useRef(null)
    let date2Box = useRef(null)
    let date2P = useRef(null)
    let date2H5 = useRef(null)
    let inp1Ref = useRef(null)
    let fromP = useRef(null)
    let fromBox = useRef(null)
    let inp2Ref = useRef(null)
    let toP = useRef(null)
    let toBox = useRef(null)

    let navigate = useNavigate()

    useEffect(() => {
        document.body.style.overflow =(mobileFrom || mobileTo || mobileDate) ? 'hidden' : 'auto'
    },[mobileFrom,mobileDate,mobileTo])

    window.onclick = function (e) {
        if (e.target != date1Box.current && e.target != date1P.current && e.target != date1H5.current) {
            setDatePicker1(false)
        }
        if (e.target != date2Box.current && e.target != date2P.current && e.target != date2H5.current) {
            setDatePicker2(false)
        }
        if (e.target?.innerText != side1.current?.innerText && e.target?.innerText != side2.current?.innerText) {
            setTypeStatus(false)
        }
        if (e.target != inp1Ref.current && e.target != fromP.current && e.target != fromBox.current) {
            setFromPickerStatus(false)
        }
        if (e.target != inp2Ref.current && e.target != toP.current && e.target != toBox.current) {
            setToPickerStatus(false)
        }
    }

    function reversePlaces(e) {
        e.stopPropagation()
        setFromPlace(toPlace)
        setToPlace(fromPlace)
    }
    function search() {
        if (tripType == 'Туда-обратно') {
            if (fromPlace && toPlace && date1 != 'Добавьте дату' && date2 != 'Добавьте дату') {
                navigate(`/flights/transport?from=${fromPlace}&to=${toPlace}&date1=${date1.format("YYYY-MM-DDTHH:mm")}&date2=${date2.format("YYYY-MM-DDTHH:mm")}&fromCity=${fromCity}&toCity=${toCity}`)
            }
            else {
                toast.error('Fill')
            }
        } else {
            if (fromPlace && toPlace && date1 != 'Добавьте дату') {
                navigate(`/flights/transport?from=${fromPlace}&to=${toPlace}&date1=${date1.format("YYYY-MM-DDTHH:mm")}&fromCity=${fromCity}&toCity=${toCity}`)
            }
            else {
                toast.error('Fill')
            }
        }
    }
    return (
        <>
            {mobileFrom && window.innerWidth <= 768 ? <MobileFrom setMobileFrom={setMobileFrom} toPlace={toPlace} setFromCity={setFromCity} setFromPickerStatus={setFromPickerStatus} setFromPlace={setFromPlace} /> : null}
            {mobileTo && window.innerWidth <= 768 ? <MobileTo setMobileTo={setMobileTo} fromPlace={fromPlace} setToCity={setToCity} setToPickerStatus={setToPickerStatus} setToPlace={setToPlace} /> : null}
            {mobileDate && window.innerWidth <= 768 ? <MobileDate setMobileDate={setMobileDate} /> : null}
            <div className='filterFlight' >
                <div className='tripType' >
                    <p onClick={() => setTypeStatus(!typeStatus)} >{tripType}</p>
                    <FaAngleDown size={16} color='white' />
                    <div style={{ display: typeStatus ? 'block' : 'none' }} className='typeDropdown'>
                        <p ref={side1} onClick={() => (setTripType('В одну сторону'), setTypeStatus(false))} >В одну сторону <FaArrowRight /> </p>
                        <p ref={side2} onClick={() => (setTripType('Туда-обратно'), setTypeStatus(false))} >Туда-обратно<FaRotate /> </p>
                    </div>
                </div>
                <div>
                    <div>
                        <div ref={fromBox} id='box1' className='filter-box first-box ' onClick={() => (inp1Ref.current.focus(), setFromPickerStatus(true), setMobileFrom(true))} >
                            <div className='reverseButton' onClick={(e) => reversePlaces(e)} >
                                <FaArrowsRotate />
                            </div>
                            <p ref={fromP} >Откуда:</p>
                            <input ref={inp1Ref} value={fromPlace} onChange={(e) => setFromPlace(e.target.value)} style={tripType == 'В одну сторону' ? { maxWidth: '260px' } : null} placeholder='Страна или город' />
                            {fromPickerStatus && window.innerWidth > 768 ? <FromPicker toPlace={toPlace} setFromCity={setFromCity} setFromPickerStatus={setFromPickerStatus} setFromPlace={setFromPlace} /> : null}
                            {fromPlace && fromPickerStatus && window.innerWidth > 768 ? <IoIosCloseCircle className='deleteInp' size={25} onClick={() => setFromPlace('')} /> : null}
                        </div>
                        <div ref={toBox} id='box2' className='filter-box' onClick={() => (inp2Ref.current.focus(), setToPickerStatus(true), setMobileTo(true))} >
                            <p ref={toP} >Куда</p>
                            <input ref={inp2Ref} value={toPlace} onChange={(e) => setToPlace(e.target.value)} style={tripType == 'В одну сторону' ? { maxWidth: '260px' } : null} placeholder='Страна или город' />
                            {toPickerStatus && window.innerWidth > 768 ? <ToPicker fromPlace={fromPlace} setToCity={setToCity} setToPickerStatus={setToPickerStatus} setToPlace={setToPlace} /> : null}
                            {toPlace && toPickerStatus && window.innerWidth > 768 ? <IoIosCloseCircle className='deleteInp' size={25} onClick={() => setToPlace('')} /> : null}

                        </div>
                        <div className='dateInputs' >
                            <div ref={date1Box} onClick={() => (setDatePicker1(true), setMobileDate(true))} className='filter-box'>
                                <p ref={date1P} >Туда</p>
                                <h5 ref={date1H5} >{date1 == 'Добавьте дату' ? date1 : tripType == 'Туда-обратно' && date2 != 'Добавьте дату' && window.innerWidth <= 768 ? `${date1?.format('DD')} ${getMonthName(date1.format('MM'))} - ${date2?.format('DD')} ${getMonthName(date2.format('MM'))}` : date1?.format('YYYY-MM-DD')}</h5>
                                {datePicker1 && window.innerWidth > 768 ? <DatePicker1 tripType={tripType} date1={date1} date2={date2} setDate1={setDate1} setDatePicker1={setDatePicker1} /> : null}
                            </div>
                            <div ref={date2Box} onClick={() => setDatePicker2(true)} style={{ display: tripType == 'В одну сторону' ? 'none' : 'block' }} className='filter-box' >
                                <p ref={date2P} >Обратно</p>
                                <h5 ref={date2H5} >{date2 == 'Добавьте дату' ? 'Добавьте дату' : date2?.format('YYYY-MM-DD')}</h5>
                                {datePicker2 && window.innerWidth > 768 ? <DatePicker2 date1={date1} date2={date2} setDate2={setDate2} setDatePicker2={setDatePicker2} /> : null}
                            </div>
                            <div className='filter-box last-box ' >
                                <p>Путешественники и класс</p>
                                <h5>{person} чел., Эконом</h5>
                            </div>
                        </div>
                    </div>
                    <div className='buttonSearch' onClick={() => search()} >
                        <h3>Поиск</h3>
                    </div>
                </div>
                <div>
                    <div className='check' >
                        <input id='c1' type="checkbox" />
                        <label htmlFor="c1">Добавить аэропорты поблизости</label>
                    </div>
                    <div className='check' >
                        <input id='c2' type="checkbox" />
                        <label htmlFor="c2">Прямые рейсы</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlightFilter