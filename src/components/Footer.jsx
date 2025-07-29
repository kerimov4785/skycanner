import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

function Footer() {
  let [status, setStatus] = useState({})
  let blockStyle = { maxHeight: '1000px' }
  let noneStyle = { maxHeight: '0px' }
  return (
    <footer>
      <div className='container footer'>
        <div id='lang' >Азербайджан · русский · 0 AZN</div>
        <div>
          <div id='f-col1'>
            <div><p>Справка</p></div>
            <div><p>Настройки конфиденциальности</p></div>
            <div><p>Войти</p></div>
          </div>
          <div id='f-col2'>
            <div><p>Политика использования файлов cookie</p></div>
            <div><p>Политика конфиденциальности</p></div>
            <div><p>Условия предоставления услуг</p></div>
            <div><p>Наши контакты</p></div>
          </div>
          <div id='f-col3' >
            <div>
              <p onClick={() => setStatus({ ...status, '1': !status['1'] })} >Подробнее</p>
              {status['1'] ? <FaAngleUp size={16} /> : <FaAngleDown size={16} />}
              <div style={status['1'] ? blockStyle : noneStyle} >
                <div><p>Внутренние рейсы</p></div>
                <div><p>Города</p></div>
                <div><p>Горящие предложения</p></div>
                <div><p>Аэропорты</p></div>
                <div><p>Страны</p></div>
                <div><p>Авиакомпании</p></div>
                <div><p>Авиабилеты</p></div>
                <div><p>Прокат автомобилей</p></div>
                <div><p>Отели</p></div>
              </div>
            </div>
            <div onClick={() => setStatus({ ...status, '2': !status['2'] })} >
              <p>О нас</p>
              {status['2'] ? <FaAngleUp size={16} /> : <FaAngleDown size={16} />}
              <div style={status['2'] ? blockStyle : noneStyle}>
                <div><p>О нас</p></div>
                <div><p>Почему Skyscanner?</p></div>
                <div><p>Медиа</p></div>
                <div><p>Наша команда</p></div>
                <div><p>Доступность</p></div>
                <div><p>Стабильность</p></div>
                <div><p>Вакансии</p></div>
              </div>
            </div>
            <div onClick={() => setStatus({ ...status, '3': !status['3'] })} >
              <p>Партнерам</p>
              {status['3'] ? <FaAngleUp size={16} /> : <FaAngleDown size={16} />}
              <div style={status['3'] ? blockStyle : noneStyle}>
                <div><p>Подключение к нам</p></div>
                <div><p>Предложения по рекламе</p></div>
                <div><p>Travel Insights</p></div>
                <div><p>Партнерская программа</p></div>
                <div><p>API</p></div>
              </div>
            </div>
            <div onClick={() => setStatus({ ...status, '4': !status['4'] })} >
              <p>Поездки</p>
              {status['4'] ? <FaAngleUp size={16} /> : <FaAngleDown size={16} />}
              <div style={status['4'] ? blockStyle : noneStyle}>
                <div><p>Авиабилеты</p></div>
                <div><p>Отели</p></div>
                <div><p>Прокат автомобилей</p></div>
              </div>
            </div>
            <div onClick={() => setStatus({ ...status, '5': !status['5'] })} >
              <p>Международные сайты</p>
              {status['5'] ? <FaAngleUp size={16} /> : <FaAngleDown size={16} />}
              <div style={status['5'] ? blockStyle : noneStyle}>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h4>Сравнивайте цены и бронируйте дешевые авиабилеты с помощью Skyscanner</h4>
        <h3>© Skyscanner Ltd 2002–2025</h3>
      </div>
    </footer>
  )
}

export default Footer