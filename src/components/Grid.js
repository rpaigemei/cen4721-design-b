import React, { useState } from 'react';

import { FaPaintbrush, FaRegFolderOpen, FaUsers, FaUser, FaFontAwesome, FaMask, FaOtter, FaPersonWalking, FaFaceMeh, FaSeedling, FaCircleXmark } from "react-icons/fa6";


import './Grid.css'

const traits = [
    {trait: <div className='traitText' style={{ color: '#FF9ED1' }}>Creative</div>, icon: <FaPaintbrush className='traitIcon' style={{ color: '#FF9ED1' }}/>},
    {trait: <div className='traitText' style={{ color: '#ED6332' }}>Extraverted</div>, icon: <FaUsers className='traitIcon' style={{ color: '#ED6332' }}/>},
    {trait: <div className='traitText' style={{ color: '#A39EFF' }}>Deceptive</div>, icon: <FaMask className='traitIcon' style={{ color: '#A39EFF' }}/>},
    {trait: <div className='traitText' style={{ color: '#A7CAFF' }}>Leader</div>, icon: <FaFontAwesome className='traitIcon' style={{ color: '#A7CAFF' }}/>},
    {trait: <div className='traitText' style={{ color: '#43B263' }}>Playful</div>, icon: <FaOtter className='traitIcon' style={{ color: '#43B263' }}/>},
    {trait: <div className='traitText' style={{ color: '#FF9ED1' }}>Analytical</div>, icon: <FaRegFolderOpen className='traitIcon' style={{ color: '#FF9ED1' }}/>},
    {trait: <div className='traitText' style={{ color: '#ED6332' }}>Introverted</div>, icon: <FaUser className='traitIcon' style={{ color: '#ED6332' }}/>},
    {trait: <div className='traitText' style={{ color: '#A39EFF' }}>Innocent</div>, icon: <FaSeedling className='traitIcon' style={{ color: '#A39EFF' }}/>},
    {trait: <div className='traitText' style={{ color: '#A7CAFF' }}>Follower</div>, icon: <FaPersonWalking className='traitIcon' style={{ color: '#A7CAFF' }}/>},
    {trait: <div className='traitText' style={{ color: '#43B263' }}>Serious</div>, icon: <FaFaceMeh className='traitIcon' style={{ color: '#43B263' }}/>}
]

function Grid() {
    const [selectedTraits, setSelectedTraits] = useState([]);

    const selectTrait = (trait) => {
        if (!selectedTraits.includes(trait)) {
            setSelectedTraits((prevSelected) => [...prevSelected, trait]);
        }
    };

    const removeTrait = (trait) => {
        setSelectedTraits((prevSelected) => prevSelected.filter(t => t !== trait));
    };

  return (
    <div>
        <div className='selected'>
            {selectedTraits.map((trait, index) => (
                <div key={index}>
                    <FaCircleXmark onClick={() => removeTrait(trait)} className='deselect'/>

                    <div className='selectedIcon'>
                        {trait.icon}
                    </div>
                </div>
            ))}
        </div>

        <div>
            {selectedTraits.length === 5 ? (
                <div className='traits'>
                    {traits.map((trait) => (
                        <div key={trait} className='trait'>
                            {trait.icon}
                            {trait.trait}
                        </div>
                    ))}  
                </div>  
            ) : (
                <div className='traits'>
                    {traits.map((trait) => (
                        <div key={trait} onClick={() => selectTrait(trait)} className='trait'>
                            {trait.icon}
                            {trait.trait}
                        </div>
                    ))}  
                </div>
            )}
            
        </div>
    </div>
  );
};

export default Grid;