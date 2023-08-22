import React from "react"
import { team } from "../../dummydata"


const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className='items shadow'>
        
          <div className='img'>
            <img src={val.cover} alt='' />
           
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p className="dk"> {val.work}</p>
          </div>

          <div className='overlay'>
           <a href={val.linkd} target="_blank" rel="noopener noreferrer"><i className='linkedin fab fa-linkedin icon'></i></a>
              <a href={val.twitter}  target="_blank" rel="noopener noreferrer"><i className=' fab fa-twitter icon'></i></a> 
      
            </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
