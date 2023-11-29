import React, { useState } from 'react';
import './Passions.css';

const words = ['Animal welfare', 'Antiracism', 'Baking', 'Biking', 'Board membership', 'Building & Repairing', 'Business & Entrepreneurship', 'Camping/Backpacking', 'Cars/Motorcycles', 'Comedy/acting', 'Civic engagement', 'Consumer protection', 'Cooking', 'Criminal justice reform', 'Dancing', 'Dining out', 'Education', 'Ending extreme poverty', 'Environment', 'Faith/Spirituality', 'Fashion', 'Financial education', 'Food security', 'Gardening', 'Golf', 'Healthy eating', 'Housing affordability', 'Hosting events/Celebrations', 'Human rights', 'Interior Design', 'Journaling', 'Knitting/Crocheting', 'Land conservation', 'Leadership', 'Learning new skills', 'Live music', 'Making movies', 'Meditation/Mindfulness', 'Mental health', 'Mentoring', 'Microfinance', 'Organizing', 'Painting or drawing', 'Personal Finance/Budgeting', 'Pets/Animals', 'Photography', 'Playing an instrument', 'Playing games', 'Podcasts', 'Politics', 'Problem solving', 'Public media', 'Puzzles/Crosswords', 'Reading/Audio books', 'Researching', 'Running', 'Sailing/Kayaking/Surfing', 'Self-care', 'Self-defense/Martial arts', 'Singing', 'Spending time alone', 'Spending time with others', 'Swimming', 'Taking courses/Classes', 'Teaching/Coaching', 'Team sports', 'Tennis', 'Theater/Performing Arts', 'Traveling', 'Volunteering', 'Voting rights', 'Watching sports', 'Watching TV/Movies', 'Weightlifting', 'Wine/Bourbon/Tequila/etc.', "Women's rights", 'Working out', 'Writing', 'Yoga'];
var p1 = "Passion 1";
var p2 = "Passion 2";
var p3 = "Passion 3";

const PWordBox = ({ word, selected, onClick }) => {
    return (
        <div
            className={`wordBox ${selected ? "active" : ""}`}
            onClick={onClick}
        >
            {word}
        </div>
    );
};

const PRectangle = () => {
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
        if (p1 !== word && p2 !== word && p3 !== word) {
            //checking if the value is empty
            if (p1 == "Passion 1") {
                //setting the value to the word
                p1 = word;
            } else if (p2 == "Passion 2") {
                p2 = word;
            } else if (p3 == "Passion 3") {
                p3 = word;
            }
        }
        else {
             //checking if the word is already in the value
            if (p1 == word) {
                 //checking if the word is already in the value
                p1 = "Passion 1";
                setInputText1("");
            } else if (p2 == word) {
                p2 = "Passion 2";
                setInputText2("");
            } else if (p3 == word) {
                p3 = "Passion 3";
                setInputText3("");
            }
        }
    };
    



    return (
        <div>
            <div className="rectangle">
                {words.map((word, index) => (
                    <PWordBox
                        key={index}
                        word={word}
                        selected={selectedWords.includes(word)}
                        onClick={() => handleWordClick(word, setSelectedWords, selectedWords, setSelectedWords2, selectedWords2)}
                    />
                ))}
            </div>
            <div className="rectangle-2">
                {selectedWords.map((word, index) => (
                    <PWordBox
                        key={index}
                        word={word}
                        selected={selectedWords2.includes(word)}
                        onClick={() => handleWordClick2(word, setSelectedWords2, selectedWords2)}
                    />
                ))}
            </div>
            <div className="text-wrapper-2">{p1}</div>
            <textarea
                type="text"
                className="text-input-2"
                value={inputText1}
                onChange={(e) => setInputText1(e.target.value)}
            />
            <div className="text-wrapper-3">{p2}</div>
            <textarea
                type="text"
                className="text-input-3"
                value={inputText2}
                onChange={(e) => setInputText2(e.target.value)}
            />
            <div className="text-wrapper-4">{p3}</div>
            <textarea
                type="text"
                className="text-input-4"
                value={inputText3}
                onChange={(e) => setInputText3(e.target.value)}
            />
        </div>
    );
};

export default PRectangle;

