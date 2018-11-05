import React from 'react'

export default props => (
    <div className="loading-bro">
        <h1>Loading</h1>
        <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
            <circle id="loading-inner" cx="75" cy="75" r="60"/>
        </svg>
    </div>
)