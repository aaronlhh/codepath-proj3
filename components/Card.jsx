import React, { useState } from 'react'

const Card = (props) => {

    return (
        <div className={`card ${props.flipped? 'flipped':''}`} onClick={props.handleclick}>
            <div className='front'>
                {props.front}
                <br />
                {
                    props.img_src.length != 0 && 
                    <img src={props.img_src} alt="small image for question" className='image' />
                }
            </div>
            <div className='back'>
                {props.back}
            </div>
        </div>
    )
}


export default Card;