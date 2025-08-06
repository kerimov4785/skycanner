import React, { useContext } from 'react'
import { AllContext } from '../context/DataContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { FaAngleRight, FaArrowRight, FaBell, FaUserCircle } from 'react-icons/fa'
import { FaRightLeft, FaRightLong } from 'react-icons/fa6'

function Profile() {
  let { setUser, user } = useContext(AllContext)
  let navigate = useNavigate()
  function exit() {
    navigate('/')
    localStorage.removeItem('user')
    setUser({})
    toast.success('Logged out of your account')
  }
  return (
    <div className='container' >
      <section className='profile' >
        <div className='profile-col1' >
          <img src={`assets/${user.image}`} alt="" />
          <h4>Привет!</h4>
          <p>{user.email}</p>
          <div>
            <FaBell size={21} />
            <p>Уведомления о цене</p>
            <FaAngleRight />
          </div>
          <div>
            <FaUserCircle size={21} />
            <p>Личный кабинет</p>
            <FaAngleRight />
          </div>
          <button onClick={exit} >Выйти</button>
        </div>
      </section>
    </div>
  )
}
{/* <h1 className="page-title">Личный кабинет</h1>
          <div className="account-section">
            <h2 className="section-title">Общие сведения</h2>
            <div className="info-field">
              <label>Адрес электронной почты</label>
              <div className="info-value">nihatkerimov4785@gmail.com</div>
            </div>
            <h2 className="section-title">Личный кабинет</h2>
            <div className="info-field">
              <h3>Удалить личный кабинет</h3>
              <FaAngleRight />
            </div>
          </div> */}
export default Profile