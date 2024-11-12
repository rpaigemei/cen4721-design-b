import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header.js";

import './Home.css';

function Home() {    
    return (
        <div>
            <Header />

            <div className="bg">
                <div className="playButton">
                    <div className="playText">
                        <Link to='/quiz' >
                            PLAY !
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;