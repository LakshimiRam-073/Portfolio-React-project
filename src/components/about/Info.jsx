import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box about__icon">
        <i class='bx bx-code-alt '></i>
            <h3 className="about__title">Lines of Code</h3>
            <span className="about__subtitle">10,000+</span>
        </div>

        <div className="about__box about__icon">
        <i class='bx bx-briefcase' ></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">30+ Projects</span>
        </div>

        <div className="about__box about__icon">
        <i class='bx bx-briefcase' ></i>
            <h3 className="about__title">Profession</h3>
            <span className="about__subtitle">Student</span>
        </div>

    </div>
  )
}

export default Info