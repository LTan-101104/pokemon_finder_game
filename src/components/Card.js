import React from 'react'

const Card = ({ image, selected, onClick }) => {
    return (
        <div className='card'>
            <div className={selected && 'selected'}>
                <img src={image} alt="" className='card-face' />
                <img src="/assets/base.png" alt="" className='card-back' onClick={onClick} />
            </div>

        </div>

    )
}

export default Card