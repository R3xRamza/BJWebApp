import React, { useState } from 'react';
import './Values.css';

const words = ['Abundance', 'Accountability', 'Achievement', 'Adaptability', 'Adventure', 'Ambition', 'Approachability', 'Authenticity', 'Autonomy', 'Balance', 'Benevolence', 'Boldness', 'Candor', 'Caring', 'Change', 'Character', 'Collaboration', 'Commitment', 'Community', 'Compassion', 'Connection', 'Consistency', 'Continuous', 'Growth', 'Continuous', 'Contribution', 'Courage', 'Creativity', 'Credibility', 'Curiosity', 'Decisiveness', 'Dedication', 'Dependability', 'Determination', 'Discipline', 'Diversity', 'Education', 'Empathy', 'Enthusiasm', 'Equality', 'Ethics', 'Excellence', 'Fairness', 'Faith', 'Family', 'Flexibility', 'Forgiveness', 'Freedom', 'Friendships', 'Frugality', 'Fun', 'Generosity', 'Grace', 'Gratitude', 'Grit', 'Hard', 'Work', 'Harmony', 'Honesty', 'Honor', 'Humility', 'Humor', 'Impact', 'Inclusiveness', 'Independence', 'Individuality', 'Initiative', 'Innovation', 'Inspiration', 'Integrity', 'Intuition', 'Joy', 'Justice', 'Knowledge', 'Kindness', 'Leadership', 'Learning', 'Listening', 'Love', 'Loyalty', 'Mentoring', 'Mindfulness', 'Modesty', 'Motivation', 'Objectivity', 'Openness', 'Optimism', 'Originality', 'Passion', 'Peace', 'Perfection', 'Perseverance', 'Personal', 'Development', 'Play', 'Power', 'Preparedness', 'Privacy', 'Proactivity', 'Professionalism', 'Punctuality', 'Purpose', 'Quality', 'Relationships', 'Reliability', 'Religion', 'Resilience', 'Resourcefulness', 'Respect', 'Responsibility', 'Romance', 'Security', 'Selflessness', 'Service', 'Simplicity', 'Sincerity', 'Solitude', 'Spirituality', 'Stability', 'Structure', 'Success', 'Sustainability', 'Taking', 'Risks', 'Teaching', 'Thoughtfulness', 'Tolerance', 'Tradition', 'Trust', 'Uniqueness', 'Variety', 'Versatility', 'Wealth', 'Wisdom'];
var v1 = "Value 1";
var v2 = "Value 2";
var v3 = "Value 3";

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

const Rectangle = () => {
    const [selectedWords, setSelectedWords] = useState([]);
    const [selectedWords2, setSelectedWords2] = useState([]);
    const [inputText1, setInputText1] = useState("");
    const [inputText2, setInputText2] = useState("");
    const [inputText3, setInputText3] = useState("");


    const handleWordClick = (word, setSelected, selected, setSelected2, selected2) => {
        if (selected.length < 12 || selected.includes(word)) {
            if (!selected.includes(word)) {
                setSelected([...selected, word]);
                
            } else {
                setSelected(selected.filter((w) => w !== word));
                setSelectedWords2(selected2.filter((w) => w !== word));
                if (v1 == word) {
                    v1 = "Value 1";
                    setInputText1("");
                } else if (v2 == word) {
                    v2 = "Value 2";
                    setInputText2("");
                } else if (v3 == word) {
                    v3 = "Value 3";
                    setInputText3("");
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
        if (v1 !== word && v2 !== word && v3 !== word) {
            //checking if the value is empty
            if (v1 == "Value 1") {
                //setting the value to the word
                v1 = word;
            } else if (v2 == "Value 2") {
                v2 = word;
            } else if (v3 == "Value 3") {
                v3 = word;
            }
        }
        else {
             //checking if the word is already in the value
            if (v1 == word) {
                v1 = "Value 1";
                setInputText1("");
            } else if (v2 == word) {
                v2 = "Value 2";
                setInputText2("");
            } else if (v3 == word) {
                v3 = "Value 3";
                setInputText3("");
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
            <div className="text-wrapper-2">{v1}</div>
            <textarea
                type="text"
                className="text-input-2"
                value={inputText1}
                onChange={(e) => setInputText1(e.target.value)}
            />
            <div className="text-wrapper-3">{v2}</div>
            <textarea
                type="text"
                className="text-input-3"
                value={inputText2}
                onChange={(e) => setInputText2(e.target.value)}
            />
            <div className="text-wrapper-4">{v3}</div>
            <textarea
                type="text"
                className="text-input-4"
                value={inputText3}
                onChange={(e) => setInputText3(e.target.value)}
            />
        </div>
    );
};

export default Rectangle;

