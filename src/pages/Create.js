import React from "react";
import { Link } from "react-router-dom";

import character from '../assets/character.png';
import Header from "../components/Header";
import Grid from "../components/Grid";
import './Create.css'

function Create() {
    return (
        <div>
            <Header />

            <div className="create">
                <img src={character} className="character" alt="character"/>
                <div className="customization">
                    <div className="naming">
                        <div className="name">
                            <div className="nameLabel">
                                First Name
                            </div>
                            <input name="firstNameInput" className="nameInput" />
                        </div>
                        <div className="name">
                            <div className="nameLabel">
                                Last Name
                            </div>
                            <input name="lastNameInput" className="nameInput" />
                        </div>
                    </div>

                    <Grid />

                    <div className="doneButton">
                        <div className="doneText">
                            <Link to='/end' >
                                Done
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create;