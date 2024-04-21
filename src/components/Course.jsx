import React from 'react'

const Course = ({ courseName, examTime }) => {
  return (
    <div className="classroom-box">
        <h2>{courseName}</h2>
        <p>Exam Time: {examTime}</p>
  </div>
  )
}

export default Course