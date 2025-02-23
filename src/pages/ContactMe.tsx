import React from 'react';
import './ContactMe.css';
import { FaLinkedin } from 'react-icons/fa';

const userData = {
  name: "Sai Saketh",
  title: "Data Science & Cybersecurity Enthusiast",
  summary: "Passionate about AI, Networking, and Data Science.",
  companyUniversity: "SRM Institute of Science and Technology",
  linkedinLink: "https://www.linkedin.com/in/2003saisaketh/",
  profilePicUrl: "https://media.licdn.com/dms/image/v2/D5603AQHfO-z92hE4rQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730557404509?e=1746057600&v=beta&t=J1UYp94Ja7NMBhDOWhaziL2tmOfNYl-tt4B5brRf554",
};

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>
          Whether it’s a creative project, a tech adventure, or just to geek out about the latest trends—I'm here for the plot twist.
        </p>
      </div>
      <div className="linkedin-badge-custom">
        <img
          src={userData.profilePicUrl}
          alt="Sai Saketh"
          className="badge-avatar"
        />
        <div className="badge-content">
          <h3 className="badge-name">{userData.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">
            {userData.summary}
          </p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
