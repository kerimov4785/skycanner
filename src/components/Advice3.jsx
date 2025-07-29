import React from 'react'
import { FaTripadvisor } from 'react-icons/fa'

function Advice3() {
    return (
        <div className='adviceSection3' >
            <h3>Планируйте путешествия без стресса</h3>
            <p>Наша миссия — помочь вам путешествовать с уверенностью и без лишнего стресса.</p>
            <div className='adviceBox3' >
                <article>
                    <div>
                        <FaTripadvisor size={25} />
                    </div>
                    <div>
                        <h3>Ищите гибкие тарифы</h3>
                        <p>Бронируйте авиабилеты с гибкими тарифами, чтобы не потерять деньги в случае переноса или отмены рейса.</p>
                    </div>
                </article>
                <article>
                    <div>
                        <FaTripadvisor size={25} />
                    </div>
                    <div>
                        <h3>Ищите гибкие тарифы</h3>
                        <p>Бронируйте авиабилеты с гибкими тарифами, чтобы не потерять деньги в случае переноса или отмены рейса.</p>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Advice3