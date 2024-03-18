import React from "react";
import { useState } from "react";
import Card from "./Card";

const Container = ({cards, setcurrStreak, setLongestStreak}) => {
    const [currFront, setcurrFront] = useState('Start!');
    const [currBack, setcurrBack] = useState('Press the next arrow to start the flashcards :)');
    const [currImg, setcurrImg] = useState('');
    const [flipped, setFlipped] = useState(false);
    const [currIndex, setcurrIndex] = useState(0);
    const [currAnswer, setcurrAnswer] = useState('');
    const [correctAns, setcorrectAns] = useState('');
    
    function prevCard () {
        setcurrIndex(currIndex - 1);
        let card = cards[currIndex-1];
        setcurrFront(card.front);
        setcurrBack(card.back);
        setcurrImg(card.img_src);
        if (flipped) {
            setFlipped(!flipped);
        }
    }


    function nextCard () {
        setcurrIndex(currIndex + 1);
        let card = cards[currIndex+1];
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

    function handleSubmit() {
        if (currIndex == 0 || flipped == true){
            setcorrectAns('');
            return;
        }
        if (cards[currIndex].back != currAnswer.trim()){
            setcorrectAns('false');
            setcurrStreak( (prevStreak) => {
                setLongestStreak((prevLongestStreak) => {
                    if (prevLongestStreak < prevStreak) {
                        return prevStreak;
                    }
                    return prevLongestStreak;
                });
                return 0;
            });
        }else{
            setcorrectAns('true');
            setcurrStreak((prevStreak) => {
                return prevStreak + 1;
            });
        }
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
            <div className="input-space">
                <p>Guess the answer here: </p>
                <input  type="text"
                        onChange={(e) => {setcurrAnswer(e.target.value);}} 
                        placeholder="Place your answer here..."
                        id={correctAns}/>
                <input type="button" value='Submit Guess' onClick={handleSubmit}/>
            </div>
            <div>current index = {currIndex}</div>
            {
                currIndex == 0? 
                <button type="prev" className="prevCard" onClick={prevCard} disabled>⭠</button>:
                <button type="prev" className="prevCard" onClick={prevCard}>⭠</button>
            }
            {
                currIndex == cards.length-1? 
                <button type='next' className='nextCard' onClick={nextCard} disabled>⭢</button>:
                <button type='next' className='nextCard' onClick={nextCard}>⭢</button>
            }
        </>
    )
}


export default Container;