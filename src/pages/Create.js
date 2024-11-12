import React from "react";
import { Slider } from '@mui/material';
import { Link } from "react-router-dom";

import character from '../assets/character.png';
import Header from "../components/Header";
import './Create.css'

function Create() {
    return (
        <div>
            <Header />

            <div className="create">
                <img src={character} className="character"/>
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

                    <div className="sliders">
                        <div className="slider">
                            <div className="sliderLabelLeft">
                                Creative
                            </div>
                            
                            <Slider
                                aria-label="traits1"
                                defaultValue={50}
                                valueLabelDisplay="auto"
                                shiftStep={30}
                                step={10}
                                marks
                                min={0}
                                max={100}
                                sx={{ width: 250, color: '#ED6332' }}
                            />

                            <div className="sliderLabelRight">
                                Analytical
                            </div>
                        </div>
                        <div className="slider">
                            <div className="sliderLabelLeft">
                                Extraverted
                            </div>
                            
                            <Slider
                                aria-label="traits1"
                                defaultValue={50}
                                valueLabelDisplay="auto"
                                shiftStep={30}
                                step={10}
                                marks
                                min={0}
                                max={100}
                                sx={{ width: 250, color: '#ED6332' }}
                            />

                            <div className="sliderLabelRight">
                                Introverted
                            </div>
                        </div>
                        <div className="slider">
                            <div className="sliderLabelLeft">
                                Deceptive
                            </div>
                            
                            <Slider
                                aria-label="traits1"
                                defaultValue={50}
                                valueLabelDisplay="auto"
                                shiftStep={30}
                                step={10}
                                marks
                                min={0}
                                max={100}
                                sx={{ width: 250, color: '#ED6332' }}
                            />

                            <div className="sliderLabelRight">
                                Innocent
                            </div>
                        </div>
                        <div className="slider">
                            <div className="sliderLabelLeft">
                                Leader
                            </div>
                            
                            <Slider
                                aria-label="traits1"
                                defaultValue={50}
                                valueLabelDisplay="auto"
                                shiftStep={30}
                                step={10}
                                marks
                                min={0}
                                max={100}
                                sx={{ width: 250, color: '#ED6332' }}
                            />

                            <div className="sliderLabelRight">
                                Follower
                            </div>
                        </div>
                        <div className="slider">
                            <div className="sliderLabelLeft">
                                Playful
                            </div>
                            
                            <Slider
                                aria-label="traits1"
                                defaultValue={50}
                                valueLabelDisplay="auto"
                                shiftStep={30}
                                step={10}
                                marks
                                min={0}
                                max={100}
                                sx={{ width: 250, color: '#ED6332' }}
                            />

                            <div className="sliderLabelRight">
                                Serious
                            </div>
                        </div>
                        
                    </div>

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