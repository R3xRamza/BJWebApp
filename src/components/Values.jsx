import React, { useState } from "react";
import "./Values.css";
import Passions from "./Passions.jsx";

const words = ['Abundance', 'Accountability', 'Achievement', 'Adaptability', 'Adventure', 'Ambition', 'Approachability', 'Authenticity', 'Autonomy', 'Balance', 'Benevolence', 'Boldness', 'Candor', 'Caring', 'Change', 'Character', 'Collaboration', 'Commitment', 'Community', 'Compassion', 'Connection', 'Consistency', 'Continuous', 'Growth', 'Continuous', 'Contribution', 'Courage', 'Creativity', 'Credibility', 'Curiosity', 'Decisiveness', 'Dedication', 'Dependability', 'Determination', 'Discipline', 'Diversity', 'Education', 'Empathy', 'Enthusiasm', 'Equality', 'Ethics', 'Excellence', 'Fairness', 'Faith', 'Family', 'Flexibility', 'Forgiveness', 'Freedom', 'Friendships', 'Frugality', 'Fun', 'Generosity', 'Grace', 'Gratitude', 'Grit', 'Hard', 'Work', 'Harmony', 'Honesty', 'Honor', 'Humility', 'Humor', 'Impact', 'Inclusiveness', 'Independence', 'Individuality', 'Initiative', 'Innovation', 'Inspiration', 'Integrity', 'Intuition', 'Joy', 'Justice', 'Knowledge', 'Kindness', 'Leadership', 'Learning', 'Listening', 'Love', 'Loyalty', 'Mentoring', 'Mindfulness', 'Modesty', 'Motivation', 'Objectivity', 'Openness', 'Optimism', 'Originality', 'Passion', 'Peace', 'Perfection', 'Perseverance', 'Personal', 'Development', 'Play', 'Power', 'Preparedness', 'Privacy', 'Proactivity', 'Professionalism', 'Punctuality', 'Purpose', 'Quality', 'Relationships', 'Reliability', 'Religion', 'Resilience', 'Resourcefulness', 'Respect', 'Responsibility', 'Romance', 'Security', 'Selflessness', 'Service', 'Simplicity', 'Sincerity', 'Solitude', 'Spirituality', 'Stability', 'Structure', 'Success', 'Sustainability', 'Taking', 'Risks', 'Teaching', 'Thoughtfulness', 'Tolerance', 'Tradition', 'Trust', 'Uniqueness', 'Variety', 'Versatility', 'Wealth', 'Wisdom'];

const WordBox = ({ word, selected, onClick }) => {
    return (
        <div
            className={`wordBox ${selected ? "active" : ""}`}
            onClick={onClick}
        >
            {word}
        </div>
    );
};

const Rectangle = (props) => {
    const [selectedWords, setSelectedWords] = useState([]);
    const [selectedWords2, setSelectedWords2] = useState([]);

    const handleWordClick = (word, setSelected, selected, setSelected2, selected2) => {
        if (selected.length < 12 || selected.includes(word)) {
            if (!selected.includes(word)) {
                setSelected([...selected, word]);
                
            } else {
                setSelected(selected.filter((w) => w !== word));
                setSelectedWords2(selected2.filter((w) => w !== word));
                if (props.v1 == word) {
                    props.setv1("Value 1");
                    props.setInputText1("");
                } else if (props.v2 == word) {
                    props.setv2("Value 2");
                    props.setInputText2("");
                } else if (props.v3 == word) {
                    props.setv3("Value 3");
                    props.setInputText3("");
                }
            }
        }
    };


//function
    const handleWordClick2 = (word, setSelected, selected) => {
        //checking if the word is already selected and if there are less than 3 words selected
        if (selected.length < 3 && !selected.includes(word)){
            //adding the word to the selected array
            setSelected([...selected, word]);
            } 
        else {
            //removing the word from the selected array
            setSelected(selected.filter((w) => w !== word));
            }
     //checking if any of the values already have the word
        if (props.v1 !== word && props.v2 !== word && props.v3 !== word) {
            //checking if the value is empty
            if (props.v1 == "Value 1") {
                props.setv1(word);
            } else if (props.v2 == "Value 2") {
                props.setv2(word);
            } else if (props.v3 == "Value 3") {
                props.setv3(word);
            }
        }
        else {
             //checking if the word is already in the value
            if (props.v1 == word) {
                props.setv1("Value 1");
                props.setInputText1("");
            } else if (props.v2 == word) {
                props.setv2("Value 2");
                props.setInputText2("");
            } else if (props.v3 == word) {
                props.setv3("Value 3");
                props.setInputText3("");
            }
        }
    };

    return (
        <div>
            <div className="rectangle">
                {words.map((word, index) => (
                    <WordBox
                        key={index}
                        word={word}
                        selected={selectedWords.includes(word)}
                        onClick={() => handleWordClick(word, setSelectedWords, selectedWords, setSelectedWords2, selectedWords2)}
                    />
                ))}
            </div>
            <div className="rectangle-2">
                {selectedWords.map((word, index) => (
                    <WordBox
                        key={index}
                        word={word}
                        selected={selectedWords2.includes(word)}
                        onClick={() => handleWordClick2(word, setSelectedWords2, selectedWords2)}
                    />
                ))}
            </div>
            <div className="text-wrapper-2">{props.v1}</div>
            <textarea
                type="text"
                className="text-input-2"
                value={props.inputText1}
                onChange={(e) => props.setInputText1(e.target.value)}
            />
            <div className="text-wrapper-3">{props.v2}</div>
            <textarea
                type="text"
                className="text-input-3"
                value={props.inputText2}
                onChange={(e) => props.setInputText2(e.target.value)}
            />
            <div className="text-wrapper-4">{props.v3}</div>
            <textarea
                type="text"
                className="text-input-4"
                value={props.inputText3}
                onChange={(e) => props.setInputText3(e.target.value)}
            />
        </div>
    );
};

export const Values = () => {

    const [showLogin, setShowLogin] = useState(false);
    const [inputText1, setInputText1] = useState("");
    const [inputText2, setInputText2] = useState("");
    const [inputText3, setInputText3] = useState("");
    const [v1,setv1] = useState("Value 1");
    const [v2,setv2] = useState("Value 2");
    const [v3,setv3] = useState("Value 3");

    const handleRectangleClick = () => {
        setShowLogin(true);
        window.scrollTo({
        top: 0
    });
  };

    return (
        <div className="vdesktop">
            {!showLogin ? (
            <div className="div">
                <div className="text-wrapper">My Values</div>
                <p className="burh">Click on words to add them to your values list. Choose up to 12 words that align with your values</p>
                <p className="p">Click on three values to write shortly about</p>
                <Rectangle v1={v1} v2={v2} v3={v3} inputText1={inputText1} inputText2={inputText2} inputText3={inputText3} setInputText1={setInputText1} setInputText2={setInputText2} setInputText3={setInputText3} setv1={setv1} setv2={setv2} setv3={setv3} />
                <div className="overlap-group" onClick={handleRectangleClick}>
                    <div className="rectangle-3"/>
                    <div className="text-wrapper-5">Submit Values</div>
                </div>
            </div>
            ) : (
            <Passions v1={v1} v2={v2} v3={v3} inputText1={inputText1} inputText2={inputText2} inputText3={inputText3}/>
            )}
        </div>

)};


export default Values;
