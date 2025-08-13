import React, { useEffect, useRef, useState } from 'react'
import CarFilter from '../components/CarFilter'
import { Link } from 'react-router-dom'
import { FaCaretRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import Advice1Hotel from '../components/Advice1Hotel'
import PopularCard from '../components/PopularCard'
import PopularSection from '../components/PopularSection'
import Advice2 from '../components/Advice2'
import Advice2Car from './Advice2Car'
import SectionCarCompany from '../components/SectionCarCompany'
import FlightQuestion from '../components/FlightQuestion'
import { useContext } from 'react'
import { AllContext } from '../context/DataContext'
import Loader from '../components/Loader'

function Carhire() {
  let { questions, cars } = useContext(AllContext)
  return (
    <>
      <div id='ht-bg'>
        <h1>Найдите лучшие цены на аренду авто</h1>
        <CarFilter />
      </div>
      <div className='container'>
        <div id='path-title' >
          <Link to={'/'}>
            <h5>Главная</h5>
          </Link>
          <FaCaretRight color='#c4c7caff' />
          <p>Прокат автомобилей</p>
        </div>
        <Advice1Hotel />
        <PopularSection />
        <SectionCarCompany />
        <Advice2Car />
        <div className='flightQuestionSection' style={{ margin: '30px 0 50px 0' }}>
          <h2>Аренда авто: часто задаваемые вопросы</h2>
          <div className='flightQuestionBox'>
            {questions.map((item, i) => <FlightQuestion key={i} q={item} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Carhire