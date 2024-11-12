import React from "react";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";

import Header from "../components/Header";
import Questions from "../components/Questions";

import './Quiz.css';

function Quiz() {
    return (
        <div>
            <Header />

            <div className='body'>
                <div className="title">
                    Create your character with a quiz!
                </div>
                <Link to='/create' className="skip">
                    SKIP QUIZ
                    <CgArrowLongRight />
                </Link>

                <div className="quiz">
                    <Questions />   
                </div>

                <div className="createButton">
                    <div className="createText">
                        <Link to='/create' >
                            Create Character
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quiz;