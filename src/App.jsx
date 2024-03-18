import './App.css'
import Container from '../components/Container'
import {React, useState} from 'react'

function App() {
    const cards = [
        {
            front: 'Start!',
            img_src: '',
            back: 'Press the next arrow to start the flashcards :)'
        },
        {
            front: 'What is it called when plants develop holes or slits in the leaves as they receive more sunlight?',
            img_src: '',
            back: 'Fenestration'
        },
        {
            front: 'What is more energy consuming for a plant, developing new roots or putting out flowers?',
            img_src: '',
            back: 'Putting out flowers'
        },
        {
            front: 'When a plant needs more than 50% humidity, what kind of plant is it?',
            img_src: '',
            back: 'Tropical'
        },
        {
            front: 'What indoor plant is the best for purifying air, as tested by NASA?',
            img_src: '',
            back: 'English Ivy'
        },
        {
            front: 'What is an unlikely booster for plant growth?',
            img_src: '',
            back: 'Music!'
        },
        {
            front: 'What plant is known for looking perked up at night but droopy by day?',
            img_src: '',
            back: 'Prayer Plant or Maranta'
        },
        {
            front: 'What type of plant is this?',
            img_src: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_zz-plant_bryant_mint_variant.jpg?v=1659983586',
            back: 'ZZ Plant'
        },
        {
            front: 'When a plant develops pests, what is the first thing you should do?',
            img_src: '',
            back: 'Isolate the plant from other plants'
        },
        {
            front: 'What can you do for plants to improve their ability to photosynthesize?',
            img_src: '',
            back: 'Dust or clean off the leaves'
        },
        {
            front: 'If a plant starts to develop yellow spots in the middle of its leaves, what could be the culprit?',
            img_src: '',
            back: 'Overwatering or fungus infection'
        },
    ]

    const [currStreak, setcurrStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0)

    return (
        <>
            <div className='App'>
                <div className='header'>
                    <h2>The Ultimate Plant Parent!</h2>
                    <h4>How good of a plant parent are you? Test all of your planty knowledge here!</h4>
                    <h5>Number of cards: {cards.length-1}</h5>
                    <h5>Current Streak: {currStreak}, Longest Streak: {longestStreak}</h5>
                </div>
                <br />
                <Container cards={cards} 
                            setcurrStreak = {setcurrStreak}
                            setLongestStreak = {setLongestStreak}/>
            </div>
        </>
    )
}

export default App
