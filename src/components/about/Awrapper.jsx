import React from "react"
import { awrapper } from "../../dummydata"
import OnlineCourses from "../allcourses/OnlineCourses"

const Awrapper = () => {
  return (
    <>
      <section className='awrapper'>
        {/* <div className='imag'>
          {awrapper.map((val) => {
            return (
              <div className='box flex'>
                {/* <div className='img'>
                
                  <img src={val.cover} alt='' /> 
                </div>
                <OnlineCourses />
                <div className='text'>
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            )
          })}
        </div> */}
        <OnlineCourses/>
      </section>
    </>
  )
}

export default Awrapper
