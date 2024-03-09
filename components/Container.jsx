import React from "react";
import { useState } from "react";
import Card from "./Card";

const Container = (props) => {
    const cards = props.cards;
    const [currFront, setcurrFront] = useState('Start!');
    const [currBack, setcurrBack] = useState('Press the next arrow to start the flashcards :)');
    const [currImg, setcurrImg] = useState('');
    const [flipped, setFlipped] = useState(false);
    
    function nextCard () {
        let index = Math.floor(Math.random()*10 + 1);
        let card = cards[index]
        setcurrFront(card.front);
        setcurrBack(card.back);
        setcurrImg(card.img_src);
        if (flipped) {
            setFlipped(!flipped);
        }
    } 

    function handleclick() {
        setFlipped(!flipped);
    }

    return (
        <>
            <Card 
                front={currFront} 
                back={currBack} 
                img_src={currImg} 
                handleclick={handleclick}
                flipped= {flipped}
            />
            <button type='next' className='nextCard' onClick={nextCard}>⭢</button>
        </>
    )
}


export default Container;