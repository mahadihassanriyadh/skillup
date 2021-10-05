import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CourseDetails = () => {
    const [courses, setCourses] = useState([]);
    const { courseKey } = useParams();
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mahadihassanriyadh/images/main/AllCourses.json')
            .then(response => response.json())
            .then(data => setCourses(data))
    }, [])

    const course = courses.find(course => course.key === courseKey);

    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center my-5">
                <img className="img-fluid w-50 me-5" src={course?.picture} alt="" />
                <div>
                    <h1>{course?.name}</h1>
                    <p><span className="fw-bold">Instructor: </span> {course?.instructor}</p>
                    <p><span className="fw-bold">Details: </span> {course?.details}</p>
                    <Button className="btn btn-danger fw-bold text-white">Enroll Now</Button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;