import React, { useState } from 'react'
import './service.css'

const Service = () => {
    const [toggleState,setToggleState] =useState(0);
    const toggleTab =(index)=>{
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Roles</h2>
      <span className="section__subtitle">What I have pursuied this long?</span>

      <div className="services__container container grid">
        <div className="services__content">
            <div>
                <i onClick={()=>toggleTab(0)} className="uil uil-brackets-curly services__icon"></i>
                <h3 className="services__title">Data <br/> Scientist </h3>
            </div>
            <span className="services__button" onClick={()=>toggleTab(1)}>View More
            <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState ===1 ? "services__modal active-modal":"services__modal"}>
                <div className="services__modal-content">
                    <i onClick={ () => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Data Scientist</h3>
                    <p className="services__modal-description">
                    Errors using inadequate data are much less than those using no data at all.
                    </p>


                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Proficiency in popular machine learning frameworks.

                        </p>
                    </li>


                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Familiarity with a wide variety of data sources.

                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Create comprehensive analytical solution.

                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        To discover trends and patterns, combine various algorithms and modules.

                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Developing statistical and predictive models to run against the data sets.

                        </p>
                    </li>
                </ul>
                </div>
            </div>
            
        </div>

        <div className="services__content">
            <div>
                <i  onClick={()=>toggleTab(0)}className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">Ui/Ux <br /> Designer</h3>
            </div>

            <span onClick={()=>toggleTab(2)} className="services__button">View More
            <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState ===2 ? "services__modal active-modal":"services__modal"}>
                <div className="services__modal-content">
                    <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close">

                    </i>

                    <h3 className="services__modal-title">Ui/Ux Designer</h3>
                    <p className="services__modal-description">
                    Design is not just what it looks like and feels like. Design is how it works.   
                    </p>


                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Identify and resolve UX issues.


                        </p>
                    </li>


                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Developing and conceptualizing a comprehensive UI/UX design strategy for the brand.

                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Adhering to style standards on typography and graphic design.

                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Designing UI elements and tools such as navigation menus, search boxes, tabs, and widgets for our digital assets.

                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Make unique graphic designs.

                        </p>
                    </li>
                </ul>
                </div>
            </div>
         
        </div>


        
        <div className="services__content">
            <div>
                <i onClick={()=>toggleTab(0)} className="uil uil-edit services__icon"></i>
                <h3 className="services__title">Creative <br /> Programmer</h3>
            </div>

            <span onClick={()=>toggleTab(3)}className="services__button">View More
            <i className="uil uil-arrow-right services__button-icon"></i></span>    

            <div className={toggleState ===3 ? "services__modal active-modal":"services__modal"}>
                <div className="services__modal-content">
                    <i onClick={()=>toggleTab(0)}className="uil uil-times services__modal-close">

                    </i>

                    <h3 className="services__modal-title">Creative Programmer</h3>
                    <p className="services__modal-description">
                    If at first, you don't succeed, call it version 1.0   
                    </p>


                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Fixing bugs in existing programs.

                        </p>
                    </li>


                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Developing and analysing algorithms.

                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Maintaining operating systems.

                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Troubleshooting system errors and writing computer instructions.

                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Developing and deploying web applications.

                        </p>
                    </li>
                </ul>
                </div>
            </div>
         
        </div>
      </div>
    </section>
  )
}

export default Service