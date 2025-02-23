import React, { useEffect } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaAws } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiCisco, SiGreatlearning, SiAlibabacloud } from 'react-icons/si';

// Define type locally
type Certification = {
  title: string;
  issuer: string;
  link: string;
  iconName: string;
  issuedDate?: string;
};

const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'alibaba': <SiAlibabacloud />,
  'cisco': <SiCisco />,
  'greatlearning': <SiGreatlearning />,
  'aws': <FaAws />
};

// Local static data
const localCertifications: Certification[] = [
  {
    title: "Algorithms Specialization",
    issuer: "Stanford Online",
    link: "https://www.coursera.org/account/accomplishments/specialization/V99QUI8RZDOI",
    iconName: "coursera",
    issuedDate: "Oct 2024"
  },
  {
    title: "Network Defence",
    issuer: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/9236eb7a-127a-4572-9a14-3b5329dc1b1a/public_url",
    iconName: "cisco",
    issuedDate: "Jul 2024"
  },
  {
    title: "Introduction to Power Electronics",
    issuer: "Great Learning",
    link: "https://www.mygreatlearning.com/certificate/JLQCGNTI",
    iconName: "greatlearning",
    issuedDate: "Apr 2024"
  },
  {
    title: "Big Data Analysis Deep Dive",
    issuer: "Alibaba Cloud",
    link: "https://www.coursera.org/account/accomplishments/records/ZZQ3B9G7WWL7",
    iconName: "alibaba",
    issuedDate: "Oct 2023"
  },
  {
    title: "Network Basics",
    issuer: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/6adb368e-1069-4fa5-8e0e-bb3a3c4383c2/public_url",
    iconName: "cisco",
    issuedDate: "May 2023"
  },
  {
    title: "Machine Learning Foundations",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/badges/79b7fc98-95c5-4763-86f4-3dd6e8eb53a4/public_url",
    iconName: "aws",
    issuedDate: "May 2023"
  },
  {
    title: "Introduction to Power Tracer",
    issuer: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/1270ecc5-9d2e-4c94-9ded-4f70d3827e0f/public_url",
    iconName: "cisco",
    issuedDate: "Apr 2023"
  }
];

const Certifications: React.FC = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {localCertifications.map((cert, index) => (
          <a 
            href={cert.link} 
            key={index} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="certification-card" 
            style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="certification-content">
              <div className="certification-icon">{iconData[cert.iconName] || <FaAws />}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
