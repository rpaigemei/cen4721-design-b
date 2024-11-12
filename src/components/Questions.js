import React from "react";

import './Questions.css'

function Questions() {
    
    const questions = [
        { name: '1', question: '1. What is your favorite animal?', answer1: 'Lion', answer2: 'Elephant', answer3: 'Monkey', answer4: 'Wolf' },
        { name: '2', question: '2. What superpower would you want?', answer1: 'Super speed', answer2: 'Super strength', answer3: 'Invisibility', answer4: 'Flying' },
        { name: '3', question: '3. What is your favorite color?', answer1: 'Red', answer2: 'Yellow', answer3: 'Blue', answer4: 'Green' },
        { name: '4', question: '4. What is your favorite movie genre?', answer1: 'Comedy', answer2: 'Action', answer3: 'Drama', answer4: 'Horror' },
        { name: '5', question: '5. What is your favorite food?', answer1: 'Pizza', answer2: 'Burger', answer3: 'Chicken Nuggets', answer4: 'Pasta' }
    ];

    return (
        <div>
            {questions.map(question => (
                <div className="questions">
                    <div className="question">
                        {question.question}
                    </div>
                    
                    <label className="answers">
                        <div className="answer">
                            <input type="radio" name={question.name} value="optional" className="radioButton" /> {question.answer1}
                        </div>
                        <div className="answer">
                            <input type="radio" name={question.name} value="optional" className="radioButton" /> {question.answer2}
                        </div>
                        <div className="answer">
                            <input type="radio" name={question.name} value="optional" className="radioButton" /> {question.answer3}
                        </div>
                        <div className="answer">
                            <input type="radio" name={question.name} value="optional" className="radioButton" /> {question.answer4}
                        </div>
                    </label>
                </div>
            ))}
        </div>
    )
    
}

export default Questions;