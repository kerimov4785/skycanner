import React, { useContext, useEffect, useRef, useState } from 'react'
import PopularCard from './PopularCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { AllContext } from '../context/DataContext'

function PopularSection() {
    let { cars } = useContext(AllContext)
    let popularCity = cars.filter(item => item.popular)    
    let [x, setX] = useState(0)
    let boxes1 = useRef(null)
    let [page, setPage] = useState(1)
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)
    window.onresize = function () {
        setWindowWidth(window.innerWidth)
    }
    let unActiveButton = {
        filter: 'opacity(0.5)',
        cursor: 'no-drop',
    }
    let Allquantity = 11
    let Quantity1Page = 0
    if (windowWidth < 680) {
        Quantity1Page = 1
    }
    else if (windowWidth < 1030) {
        Quantity1Page = 2
    }
    else {
        Quantity1Page = 3
    }
    useEffect(() => {
        setX(boxes1.current.offsetWidth + 24)
    }, [windowWidth])
    function move(navigate) {

        if (navigate == 0 && page != 1) {
            setPage(page - 1)
        }
        if (navigate == 1 && Math.ceil(Allquantity / Quantity1Page) > page) {
            setPage(page + 1)
        }
    }
    return (
        <section className='popular' >
            <div className='slider-car'>
                <h2 className='car-section-title' >Популярные направления для аренды авто</h2>
                <div className='slider-car-buttons' >
                    <div style={page == 1 ? unActiveButton : null} onClick={() => move(0)} >
                        <FaChevronLeft size={13} />
                    </div>
                    <div style={page >= Math.ceil(Allquantity / Quantity1Page) ? unActiveButton : null} onClick={() => move(1)} >
                        <FaChevronRight size={13} />
                    </div>
                </div>
            </div>
            <div className="popular-cities">
                <div ref={boxes1} style={{ transform: `translateX(${windowWidth > 510 ? (page - 1) * -x : 0}px)` }} >
                    {popularCity.map((item, i) =>
                        <PopularCard key={i} city={item} />
                    )}

                </div>
            </div>
        </section>
    )
}

export default PopularSection