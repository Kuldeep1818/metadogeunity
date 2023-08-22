import React from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import Video from "../allcourses/CoursesCard"
import pieImage from "./pie chart PNG/pie chart-2 (2).png"
import './HAbout.css'



const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Heading subtitle='' title='Tokenomics' />

       {/*   <div className='coursesCard'>
            copy code form  coursesCard
            <div className='grid2'>
              {coursesCard.slice(0, 3).map((val) => (
                <div className='items'>
                  <div className='content flex'>
                    <div className='left'>
                    </div>
                    <div className='text'>
                      <h1>{val.coursesName}</h1>
                    
                      <div className='details'>
                        {val.courTeacher.map((details) => (
                          <>
                            <span>
                            <p>{details.totalTime}</p></span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
             
          
                </div>
              ))}
            </div>
          </div>*/}

          <Video/>

          <img className="pie-image" src={pieImage} />



         
        </div>
        
      </section>
    </>
  )
}

export default HAbout
