import React from "react";
import { Link } from "react-router-dom";

import character from '../assets/character.png';
import Header from "../components/Header";
import './End.css'

function End() {
    return (
        <div>
            <Header />
            
            <div className="end">
                <img src={character} className="character" alt="character"/>

                <div className="restartButton">
                    <div className="restartText">
                        <Link to='/' >
                            Restart
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default End;