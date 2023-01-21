import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

export default class languages extends Component {
    state = {
        languages: [
            { id: 1, value: "Javascript", xp: 1.3 },
            { id: 2, value: "PHP", xp: 0.9 },
            { id: 3, value: "HTML/CSS", xp: 1.8 },
            { id: 4, value: "SQL", xp: 0.3 }
        ],
        frameworks: [
            { id: 1, value: "React", xp: 1 },
            { id: 2, value: "Bootstrap", xp: 1.5 },
            { id: 3, value: "Sass", xp: 0.5 }
        ]
    }

    render() {
        let { languages, frameworks } = this.state;
        return (
            <div className='languagesFrameworks'>
                <ProgressBar
                    languages={languages}
                    className='languagesDisplay'
                    title='languages'
                />
                <ProgressBar
                    languages={frameworks}
                    className='frameworksDisplay'
                    title='frameworks & bibliothèques'
                />
            </div>
        )
    }
}
