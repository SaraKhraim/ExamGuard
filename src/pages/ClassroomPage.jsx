import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Course from '../components/Course';
import './ClassroomPage.css';

const ClassroomPage = () => {
  // Extract the classroom ID from the URL params
  const { classroomId } = useParams();
  
  const classrooms = [
    { 
      id: 1, 
      className: 'Classroom A', 
      courses: [
        { id: 101, courseName: 'Mathematics', examTime: 'April 25, 2024 - 9:00 AM' },
        { id: 102, courseName: 'Science', examTime: 'April 26, 2024 - 10:30 AM' },
        // Add more courses for Classroom A
      ]
    },
    { 
      id: 2, 
      className: 'Classroom B', 
      courses: [
        { id: 201, courseName: 'History', examTime: 'April 27, 2024 - 1:00 PM' },
        { id: 202, courseName: 'English', examTime: 'April 28, 2024 - 2:30 PM' },
        // Add more courses for Classroom B
      ]
    },
    // Add more classrooms as needed
  ];  

  const renderCourses = () => {
    const selectedClassroom = classrooms.find(classroom => classroom.id === parseInt(classroomId));
    if (selectedClassroom) {
      return selectedClassroom.courses.map(course => (
        <div key={course.id} className="course-box">
          <Course
            courseName={course.courseName}
            examTime={course.examTime}
          />
        </div>
      ));
    } else {
      return <h2>No Exams in this classroom</h2>;
    }
  };

  

  return (
    <React.Fragment>
      <NavBar />
      <SideBar />
      <div style={{ padding: '20px' }} className='container min-vh-50 d-flex flex-column justify-content-center align-items-center'>
        <h1>Courses for Classroom {classroomId}</h1>
        <div className="courses-container">
          {renderCourses()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClassroomPage;
