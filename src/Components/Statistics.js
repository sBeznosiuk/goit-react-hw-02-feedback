import React from 'react'


const Statistics = ({ good, bad, neutral, positivePercentage, total }) => {
    return (
        <ul>
            <li>
                <span>Good: </span>
                <span>{good}</span>
            </li>
            <li>
                <span>Neutral: </span>
                <span>{bad}</span>
            </li>
            <li>
                <span>Bad: </span>
                <span>{neutral}</span>
                </li>
            <li>
                <span>Total: </span>
                <span>{total()}</span>
            </li>
            <li>
                <span>Positive feedback: </span>
                <span>{positivePercentage()}</span>
            </li>
        </ul>
)}

export default Statistics