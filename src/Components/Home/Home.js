import React, { useEffect, useState } from 'react';
import './Home.css';
import bgImage from '../../images/home-bg.png'
import Button from '@restart/ui/esm/Button';
import { useHistory } from 'react-router';
import HomeCourseDisplay from '../HomeCourseDisplay/HomeCourseDisplay';
import { Row } from 'react-bootstrap';
const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./ShowCourses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    const history = useHistory();
    const firstSection = {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        display: "block",
        position: "relative",
        backgroundSize: "100%",
        paddingBottom: "25%"
    }
    const handleCoursesClick = () => {
        history.push('/courses')
    }
    return (
        <div className="main-section container">
            <div style={firstSection} className="firstSection">
                <h1 className="firstSectionHeading">Welcome To SkillUp</h1>
                <div className="mb-2">
                    <Button onClick={handleCoursesClick} variant="primary" className="btn-primary rounded border-0 py-2 px-3 fs-4" size="lg">
                    Browse Courses
                    </Button>
                </div> 
            </div>

            <div className="secondSection my-5">
                <h2 className="text-center">Our Most Popular Courses</h2>
                <Row xs={3} md={3} lg={3} className="m-4">
                    {
                        courses.map(course =>
                            <HomeCourseDisplay
                            key={course.key}
                            course={course}
                        ></HomeCourseDisplay>
                        )
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;