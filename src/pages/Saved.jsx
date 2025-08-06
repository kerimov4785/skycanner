import React, { useContext, useState } from 'react'
import { AllContext } from '../context/DataContext'
import LikedCard from '../components/LikedCard'
import NoneLiked from '../components/NoneLiked'
import ConfirmDelete from '../components/ConfirmDelete'

function Saved() {
    let { likedTickets } = useContext(AllContext)
    let [confirmStatus, setConfirmStatus] = useState(false)
    let [ticketID , setTicketID ]  = useState()

    return (
        < div className="container3" >
            {
                confirmStatus ? <ConfirmDelete ticketID={ticketID} setConfirmStatus={setConfirmStatus} />  : null
            }
            <section className='likedSection'>
                <h3>Закладки</h3>
                {likedTickets.length != 0 ? <div className='all-liked' >
                    {likedTickets.map(item =>
                        <LikedCard confirmStatus={confirmStatus} setTicketID={setTicketID} setConfirmStatus={setConfirmStatus} key={item.id} ticket={item} />
                    )}
                </div> : <NoneLiked />}
            </section>
        </div >
    )
}

export default Saved