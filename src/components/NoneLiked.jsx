import React from 'react'
import { Link } from 'react-router-dom'

function NoneLiked() {
    return (
        <div className='noneLiked' >
            <div>
                <h5>Здесь будет всё, что вы сохраните</h5>
                <p>Ищите и сохраняйте в аккаунте понравившиеся авиабилеты, отели и автомобили.
                </p>
                <Link to={'/flights'} >
                    <button>Начать поиск</button>
                </Link>
            </div>
            <img src="https://content.skyscnr.com/m/6d02230ad2992e7a/original/img_EmptySaved_Desktop.svg" alt="" />
        </div>
    )
}

export default NoneLiked