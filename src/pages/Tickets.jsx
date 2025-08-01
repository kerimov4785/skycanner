import React from 'react'
import Transfer from '../components/Transfer'
import TimePicker from '../components/TimePicker'
import AviaCompany from '../components/AviaCompany'
import { useLocation } from 'react-router-dom'

function Tickets() {

    return (
        <>
            <div className='bg-tickets'>
                <div className= 'container2'>
                    <section className='tickets-section' >
                        <div className='tickets-filter' >
                            <p className='minitext' >Показать весь месяц</p>
                            <button>Остелижать цены</button>
                            <Transfer />
                            <TimePicker />
                            <AviaCompany />
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Tickets