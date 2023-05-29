import React from 'react'
import './noMatchFound.scss'
import noResults from '../../assets/noResults.png'
const NoMatchFound = () => {
  return (
    <div className='match-not-found'>
        <img src={noResults}/>
    </div>
  )
}

export default NoMatchFound