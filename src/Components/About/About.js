import React from 'react';
import { Col, Row } from 'react-bootstrap';
import teamImg from '../../images/team.jpg'

const About = () => {
    return (
        <div className="text-center container">
            <h1 className="m-5">About Us</h1>
            <br />
            <img src={teamImg} alt="" />
            <h3 className="m-3">Team SkillUp</h3>
            <p className="mb-5 pb-5 pt-2">Startups need more than just a great idea to succeed; they need the right people to bring the company to life. In my own entrepreneurial experiences, I’ve seen how being able to bring together a team of talented individuals can make all the difference for an up-and-coming startup. Of course, finding the talented, passionate people who will take your business to the next level isn’t always easy. In the early stages of launching your startup, you can’t afford to waste your time or money by hiring the wrong people. So how do you ensure that you bring the right team together and avoid making a bad hire? While there is no completely foolproof method to making startup hires, the following tips are some of the best strategies I’ve found that will help guide you through this important process.

</p>
        </div>
    );
};

export default About;