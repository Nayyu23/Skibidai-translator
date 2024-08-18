import React from 'react';

const AboutMe = ({ aboutMeVisible }) => {
  return (
    <div className={`about-me-container ${aboutMeVisible ? 'expanded' : ''}`}>
      <h2 className="about-me-header">About Me</h2>
      <div className="about-me-text">
        <p>
        This application is designed as a comprehensive tool designed to bridge the gap in understanding modern slang, also known as “Gen Alpha” slang. It serves to empower individuals to learn contemporary language trends without the fear of miscommunication or embarrassment. Whether you're trying to stay current or simply decode unfamiliar terminology, this application provides a user-friendly solution that fosters learning and inclusivity in an ever-evolving linguistic landscape.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
