import React, { createContext, useEffect, useRef, useState } from 'react'

export const AllContext = createContext()
import { getAllCars, getAllFlights, getLiked } from '../services/flightServices';
import { useLocation, useNavigate } from 'react-router-dom';

function DataContext({ children }) {
    let [flights, setFlights] = useState()
    let [cars, setCars] = useState()
    let [tripType, setTripType] = useState('Туда-обратно')
    let [person, setPerson] = useState(1)
    let [fromPlace, setFromPlace] = useState('') // country1
    let [fromCity, setFromCity] = useState('Baku') // city1
    let [toPlace, setToPlace] = useState('')  // country2
    let [toCity, setToCity] = useState('')  // city2
    const [date1, setDate1] = useState('Добавьте дату');
    const [date2, setDate2] = useState('Добавьте дату');
    const [searchTicket, setSearchTicket] = useState('');
    let [user, setUser] = useState(null)
    let [likedTickets, setLikedTickets] = useState([])

    let [fromPlaceCar,setFromPlaceCar] = useState('')
    let [date1Car , setDate1Car ] = useState('')
    let [date2Car , setDate2Car ] = useState('')
    let [time1Car , setTime1Car] = useState('')
    let [time2Car , setTime2Car] = useState('')

    let questions = [
        {
            question: 'Как Skyscanner сравнивает цены на прокат автомобилей?',
            answer: `Мы непрерывно сканируем предложения большинства крупных компаний, используя ту же технологию, что и для поиска авиабилетов. Поэтому вам не нужно сравнивать условия проката на разных сайтах: все они будут собраны на одной странице. На Skyscanner вы можете легко найти самые выгодные цены в 18 000 пунктах проката по всему миру.`
        },
        {
            question: 'Добавляются ли к указанной цене сборы?',
            answer: `Цену в объявлении устанавливает автопрокатная компания. Окончательная стоимость может отличаться, если вы выберете дополнительные услуги. Перед бронированием рекомендуем перепроверить цену и ознакомиться с условиями компании по прокату`
        },
        {
            question: 'Могу ли я вернуть арендованную машину в другом месте?',
            answer: `Да, некоторые прокатчики, такие как Hertz и Europcar, разрешают забирать автомобиль в одном месте и возвращать в другом. Просто выберите условие поиска Возврат в другое место, чтобы найти такие предложения. Учтите, что за услугу может взиматься дополнительный сбор.`
        },
        {
            question: 'В каких странах я могу найти на Skyscanner прокат автомобилей?',
            answer: `Практически где угодно. Мы анализируем предложения от 18 000 пунктов проката из 170 стран, используя ту же зарекомендовавшую себя технологию, что и для поиска авиабилетов.`
        },
        {
            question: 'Нужна ли для аренды автомобиля кредитная карта?',
            answer: `Арендовать авто проще и быстрее с кредитной картой, но большинство крупных компаний, 
      таких как Sixt, Avis, Budget или Hertz, позволят вам оформить аренду с дебетовой картой — при условии, что на ней есть определенная сумма.`
        },
        {
            question: 'Могу ли я арендовать минивэн?',
            answer: `
Конечно! Минивэн в г. Баку можно арендовать и для перевозки вещей, и для путешествий большой компанией (до 12 человек). При поиске используйте фильтры по вместимости и объему багажа.`
        },
        {
            question: 'Какие автомобили можно арендовать?',
            answer: `Мы сканируем предложения по всем видам аренды транспортных средств, поэтому на Skyscanner вы найдете и бодрые дешевые хэтчбеки, и экзотические спортивные автомобили. Даже дома на колесах и пассажирские фургоны!`
        },
        {
            question: 'У каких автопрокатчиков в г. Баку самые низкие цены?',
            answer: `По нашим данным, самые низкие цены на аренду автомобилей в г. Баку предлагает Car Hire Baku. В среднем прокат у этой компании стоит 250 ₼ в сутки. На втором по экономичности месте — компания FlexWays со средней ценой 210 ₼ в сутки. На третьем — компания Final Rentals. Средняя стоимость — 261 ₼ в сутки.`
        },
        {
            question: 'Если я лечу в отпуск, стоит ли брать машину напрокат в аэропорту?',
            answer: `Скорее всего, цены на аренду авто в аэропорту окажутся немного выше, чем в городе. Может действовать и дополнительный сбор. Однако посчитайте стоимость поездки до пункта проката и обратно. Возможно, выгоднее взять машину прямо в терминале.`
        },
        {
            question: 'Могу ли я взять автомобиль всего на один день?',
            answer: `Да, большинство прокатчиков предлагают фиксированную суточною ставку за аренду авто. Как правило,
       чтобы избежать дополнительных сборов, вам нужно вернуть машину в течение 24 часов.`
        },
        {
            question: 'Могу ли я взять автомобиль всего на один день?',
            answer: `Да, большинство прокатчиков предлагают фиксированную суточною ставку за аренду авто. Как правило,
       чтобы избежать дополнительных сборов, вам нужно вернуть машину в течение 24 часов.`
        },
        {
            question: 'Могу ли я арендовать машину на месяц?',
            answer: `Да, большинство прокатчиков предлагают фиксированную суточною ставку за аренду авто. Как правило,
       чтобы избежать дополнительных сборов, вам нужно вернуть машину в течение 24 часов.`
        },
    ]


    useEffect(() => {
        getAllFlights()
            .then((item) => setFlights(item))
    }, [])
    useEffect(() => {
        getAllCars()
            .then((item) => setCars(item))
    },[])
    useEffect(() => {
        setUser(JSON.parse(localStorage['user'] || '{}'))
    }, [])
    useEffect(() => {
        if (JSON.parse(localStorage['user'] || 'false')) {
            getLiked(JSON.parse(localStorage['user']).id).then(data => setLikedTickets(data.saved))
        }
    }, [user])
    const obj = {
        likedTickets,
        setLikedTickets,
        user,
        setUser,
        flights,
        setFlights,
        cars,
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
        questions,
        date1Car,
        setDate1Car,
        date2Car,
        setDate2Car,
        time1Car,
        setTime1Car,
        time2Car,
        setTime2Car,
        fromPlaceCar,
        setFromPlaceCar
    }
    return (
        <AllContext.Provider value={obj} >
            {children}
        </AllContext.Provider>
    )
}

export default DataContext