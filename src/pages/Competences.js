import React from 'react';
import Experience from '../components/competences/experience';
import Hobbies from '../components/competences/hobbies';
import Languages from '../components/competences/languages';
import OtherSkills from '../components/competences/OtherSkills';
import Navigation from '../components/Navigation';

const Competences = () => {
    return (
        <div className='knowledges'>
            <Navigation />

            <div className='knowledgesContent'>
                <Languages />
                <Experience />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Competences;