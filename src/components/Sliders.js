import React from "react";
import { Slider } from '@mui/material';

import './Sliders.css';

function Sliders() {
    return (
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
    )
}

export default Sliders;