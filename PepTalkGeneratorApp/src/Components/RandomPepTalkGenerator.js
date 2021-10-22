import './RandomPepTalkGenerator.css'
import React, { useState } from 'react'

const RandomPepTalkGenerator = (props) => {

const a = ["Champ.", "Fact:", "Everybody says", "Dang...", "Check it:", "Just saying...", "Superstar,", "Tiger", "Self.", "Know this:", "News alert:", "Girl.", "Ace,", "Excuse me but", "Experts agree:", "In my opinion,", "Hear ye, hear ye:", "Okay, listen up:"]
const b = ["The mere idea of you", "your soul", "your hair today", "everything you do", "your personal style", "every thought you have", "that sparkle in your eye", "your presence here", "what you got going on", "the essential you", "your life's journey", "that saucy personality", "your DNA", "that brain of yours", "your choice of attire", "the way you roll", "whatever your secret is", "all of y'all"]
const c = ["has serious game", "rains magic", "deserves the Nobel prize", "raises the roof", "breeds miracles", "is paying off big time", "shows mad skills", "just shimmers", "is a national treasure", "gets the party hopping", "is the next big thing", "roars like a lion", "is a rainbow factory", "is made of diamonds", "makes birds sing", "should be taught in school", "makes my world go 'round", "is 100% legit"]
const d = ["24/7.", "can I get an amen?", "and that's a fact.", "so treat yourself", "you feel me?", "that's just science.", "would I lie?", "for reals.", "mic drop.", "you hidden gem.", "snuggle bear", "period.", "can I get an amen?", "now let's dance.", "high five.", "say it again!", "according to CNN.", "so get used to it."]

const getNumber = () => {return Math.floor(Math.random()*18)}
const [sentenceToDisplay, setSentenceToDisplay] = useState('')

const clickHandler = () => {
    setSentenceToDisplay(getSentence)
}


const getSentence = () => {return a[getNumber()]+' '+b[getNumber()]+' '+c[getNumber()]+', '+d[getNumber()]}


    return(
        <div className="pep-talk-box">
            <button onClick={clickHandler}>Yes please!</button>
            <p>{sentenceToDisplay}</p>
        </div>
    );
}

export default RandomPepTalkGenerator;