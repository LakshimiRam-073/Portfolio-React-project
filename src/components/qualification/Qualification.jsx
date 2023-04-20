import React,{useState} from 'react'
import "./qualification.css"
const Qualification= () =>{
  return (
    <section className="qualification section">
         <h2 className="section__title">Qualifiction</h2>
      <span className="section__subtitle">My personal journey</span>
        
        <div className="qualification__container container">
            <div className="qualification__tabs">
            <div className={"qualification__button qualification__active button--flex"}
            >
                <i className="uil uil-graduation-cap qualification__icon"></i> Education
            </div>

            </div>
        <div className="qualification__sections">
            <div className={"qualififcation__content qualification__content-active"}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Venus Matric</h3>
                        <span className="qualification__subtitle">First School</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2007 - 2012
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>


                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Periyar Matric</h3>
                        <span className="qualification__subtitle">Middle School</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2012 - 2019
                        </div>
                    </div>
                   
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Sowdambika Boys School</h3>
                        <span className="qualification__subtitle">High School</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2019 - 2021
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>


                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">SKCET</h3>
                        <span className="qualification__subtitle">Coimbatore</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2021 - Present
                        </div>
                    </div>
                   
                </div>
            </div>

        
        </div>
        </div>
    </section>
  )

            }
export default Qualification