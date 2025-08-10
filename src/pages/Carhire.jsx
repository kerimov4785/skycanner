import React, { useEffect, useRef, useState } from 'react'
import CarFilter from '../components/CarFilter'
import { Link } from 'react-router-dom'
import { FaCaretRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import Advice1Hotel from '../components/Advice1Hotel'
import PopularCard from '../components/PopularCard'

function Carhire() {
  let [x, setX] = useState(0)
  let boxes1 = useRef(null)
  let [page, setPage] = useState(1)
  let unActiveButton = {
    filter: 'opacity(0.5)',
    cursor: 'no-drop',
  }
  let Allquantity = 11
  let Quantity1Page = 0
  if (window.innerWidth < 680) {
    Quantity1Page = 1
  }
  else if (window.innerWidth < 1030){
    Quantity1Page = 2
  }
  else {
    Quantity1Page = 3
  }
    console.log(page)
  function move(navigate) {

    setX(boxes1.current.offsetWidth + 24)
    if (navigate == 0 && page != 1) {
      setPage(page - 1)
    }
    if (navigate == 1 && Math.ceil(Allquantity / Quantity1Page) != page) {
      setPage(page + 1)
    }
  }

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
        <section className='popular' >
          <div className='slider-car'>
            <h2 className='car-section-title' >Популярные направления для аренды авто</h2>
            <div className='slider-car-buttons' >
              <div style={page == 1 ? unActiveButton : null} onClick={() => move(0)} >
                <FaChevronLeft size={13} />
              </div>
              <div style={page == Math.ceil(Allquantity / Quantity1Page) ? unActiveButton : null} onClick={() => move(1)} >
                <FaChevronRight size={13} />
              </div>
            </div>
          </div>
          <div className="popular-cities">
            <div ref={boxes1} style={{ transform: `translateX(${(page - 1) * -x}px)` }} >
              {Array.from({ length: Allquantity }).map((_, i) =>
                <PopularCard key={i} />
              )}

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Carhire