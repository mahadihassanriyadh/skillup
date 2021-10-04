import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./AllCourses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    
    return (
        <div className="container my-5">
            <h1 className="text-center">Courses</h1>
            <Row xs={3} md={3} lg={3} className="m-4">
                {
                    courses.map(course =>
                        <Course
                        key={course.key}
                        course={course}
                    ></Course>
                    )
                }
            </Row>
        </div>
    );
};

export default Courses;