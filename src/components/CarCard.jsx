import React from 'react'
import { FaArrowRight, FaUser } from 'react-icons/fa6'
import { GiMechanicalArm } from "react-icons/gi";

function CarCard({ from, carInfo }) {
    return (
        <div className="car-card">
            <div className="car-card-col-1">
                <div>
                    <h3>{carInfo.car_name}</h3>
                    <img src={`/assets/${carInfo.company_logo}`} alt="" />
                </div>
                <p>или похожий компактный автомобиль</p>
                <div className='car-card-info' >
                    <div>
                        <div style={{ width: '45px', display: "flex", alignItems: 'center', justifyContent: "space-between" }}><FaUser size={13} /> <span>{carInfo.seats}</span></div>
                        <div><GiMechanicalArm size={13} />   {carInfo.transmission[0]}</div>
                    </div>
                    <img src="/assets/carExample.png" alt="" />
                </div>
                <p>Аренда: {from}</p>
            </div>
            <div className="car-card-col-2">
                <h3 className='car-price'><span style={{fontSize:'13px'}} >Итого:</span> {carInfo.price_per_day} ₼</h3>
                <button>Посмотреть <FaArrowRight /> </button>
            </div>
        </div>
    )
}

export default CarCard