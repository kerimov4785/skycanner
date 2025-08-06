import React, { useContext } from 'react'
import { addLiked } from '../services/flightServices'
import { AllContext } from '../context/DataContext'

function ConfirmDelete({ setConfirmStatus,ticketID }) {
    let { user, likedTickets, setLikedTickets } = useContext(AllContext)

    function deleteLike() {
        setConfirmStatus(false)
        let updated = likedTickets.filter(item => item.id != ticketID)
        setLikedTickets(updated)
        addLiked(user.id, updated)
    }
    return (
        <div className='confirm'>
            <div>
                <h4>Удалить рейс?</h4>
                <p>Уведомления о ценах этого рейса также будут отключены.</p>
                <button onClick={deleteLike} >Удалить</button>
                <button onClick={() => setConfirmStatus(false) } >Отмена</button>
            </div>
        </div>
    )
}

export default ConfirmDelete