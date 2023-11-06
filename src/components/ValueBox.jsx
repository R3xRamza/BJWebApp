import React, { useState } from 'react';
import './Values.css';

const words = ['Abundance', 'Accountability', 'Achievement', 'Adaptability', 'Adventure', 'Ambition', 'Approachability', 'Authenticity', 'Autonomy', 'Balance', 'Benevolence', 'Boldness', 'Candor', 'Caring', 'Change', 'Character', 'Collaboration', 'Commitment', 'Community', 'Compassion', 'Connection', 'Consistency', 'Continuous', 'Growth', 'Continuous', 'Learning', 'Contribution', 'Courage', 'Creativity', 'Credibility', 'Curiosity', 'Decisiveness', 'Dedication', 'Dependability', 'Determination', 'Discipline', 'Diversity', 'Education', 'Empathy', 'Enthusiasm', 'Equality', 'Ethics', 'Excellence', 'Fairness', 'Faith', 'Family', 'Flexibility', 'Forgiveness', 'Freedom', 'Friendships', 'Frugality', 'Fun', 'Generosity', 'Grace', 'Gratitude', 'Grit', 'Hard', 'Work', 'Harmony', 'Honesty', 'Honor', 'Humility', 'Humor', 'Impact', 'Inclusiveness', 'Independence', 'Individuality', 'Initiative', 'Innovation', 'Inspiration', 'Integrity', 'Intuition', 'Joy', 'Justice', 'Knowledge', 'Kindness', 'Leadership', 'Learning', 'Listening', 'Love', 'Loyalty', 'Mentoring', 'Mindfulness', 'Modesty', 'Motivation', 'Objectivity', 'Openness', 'Optimism', 'Originality', 'Passion', 'Peace', 'Perfection', 'Perseverance', 'Personal', 'Development', 'Play', 'Power', 'Preparedness', 'Privacy', 'Proactivity', 'Professionalism', 'Punctuality', 'Purpose', 'Quality', 'Relationships', 'Reliability', 'Religion', 'Resilience', 'Resourcefulness', 'Respect', 'Responsibility', 'Romance', 'Security', 'Selflessness', 'Service', 'Simplicity', 'Sincerity', 'Solitude', 'Spirituality', 'Stability', 'Structure', 'Success', 'Sustainability', 'Taking', 'Risks', 'Teaching', 'Thoughtfulness', 'Tolerance', 'Tradition', 'Trust', 'Uniqueness', 'Variety', 'Versatility', 'Wealth', 'Wisdom'];

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

    const handleWordClick = (word, setSelected, selected, setSelected2, selected2) => {
        if (selected.length < 10 || selected.includes(word)) {
            if (!selected.includes(word)) {
                setSelected([...selected, word]);
                
            } else {
                setSelected(selected.filter((w) => w !== word));
                setSelectedWords2(selected2.filter((w) => w !== word));
            }
        }
    };

    const handleWordClick2 = (word, setSelected, selected) => {
        if (selected.length < 3 || selected.includes(word)) {
            if (!selected.includes(word)) {
                setSelected([...selected, word]);
            } else {
                setSelected(selected.filter((w) => w !== word));
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
                <div>Selected Words in Rectangle 2: {selectedWords2.join(", ")}</div>
            </div>
        </div>
    );
};

export default Rectangle;

