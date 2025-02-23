import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { 
  FaCode, FaBriefcase, FaCertificate, FaHandsHelping, 
  FaProjectDiagram, FaEnvelope, FaInstagram, FaMusic, FaBook 
} from 'react-icons/fa';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface TopPicksRowProps {
  profile: ProfileType;
}

const GITHUB_URL = "https://github.com/saisaketh0311"; // Replace with your GitHub URL

interface PickItem {
  title: string;
  imgSrc: string;
  route: string; // Ensuring all items use 'route' instead of 'link'
  icon?: JSX.Element;
}

const topPicksConfig: Record<ProfileType, PickItem[]> = {
  recruiter: [
    { title: "Skills", imgSrc: "https://media3.giphy.com/media/3oEjHWbXcpeKhTktXi/giphy.gif", icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: "https://media0.giphy.com/media/Xb7VYGVSzYMHV4pkHE/giphy.gif", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", imgSrc: "https://media3.giphy.com/media/veHIwhDRl780wT2XfC/giphy.gif", icon: <FaCertificate />, route: "/certifications" },
    { title: "Projects", imgSrc: "https://media0.giphy.com/media/1GDVxoZqldIJwnXkOv/giphy.gif", icon: <FaProjectDiagram />, route: GITHUB_URL },
    { title: "Contact Me", imgSrc: "https://media1.giphy.com/media/KpOqvmCFdNMhF0pQb7/giphy.gif", icon: <FaEnvelope />, route: "/contact-me" }
  ],
  developer: [
    { title: "Skills", imgSrc: "https://picsum.photos/seed/coding/250/200", route: "/skills", icon: <FaCode /> },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/development/250/200", route: GITHUB_URL, icon: <FaProjectDiagram /> },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/badge/250/200", route: "/certifications", icon: <FaCertificate /> },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/work/250/200", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Recommendations", imgSrc: "https://picsum.photos/seed/networking/250/200", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/connect/250/200", route: "/contact-me", icon: <FaEnvelope /> }
  ],
  stalker: [
    { title: "Music", imgSrc: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW53cTdxMHk4ZDFpbHZmY3ZuZXpkaXN6M3I1ZTE3d2o2MTQ4amRwaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L38CjMN7ZN1QgYeCoO/giphy.gif", route: "/music", icon: <FaMusic /> },
    {
      title: "Instagram",
      imgSrc: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHAxdGJkaTZwdW52b2xtemxxMGpmNHp1cnlhYTh5YzNtZnhoM2ExeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AN5GwDpGx5ThrI1c0z/giphy.gif",
      route: "https://www.instagram.com/2003saisaketh/",
      icon: <FaInstagram />
    }
  ],
  adventure: [
    { title: "Music", imgSrc: "https://picsum.photos/seed/music/250/200", route: "/music", icon: <FaMusic /> },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/innovation/250/200", route: GITHUB_URL, icon: <FaProjectDiagram /> },
    { title: "Reading", imgSrc: "https://picsum.photos/seed/books/250/200", route: "/reading", icon: <FaBook /> },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/connect/250/200", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/medal/250/200", route: "/certifications", icon: <FaCertificate /> }
  ]
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  const handleNavigation = (route: string) => {
    if (route.startsWith('http')) {
      window.open(route, '_blank', 'noopener,noreferrer');
    } else {
      navigate(route);
    }
  };

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => handleNavigation(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">
                {pick.icon && <span className="icon">{pick.icon}</span>}
                {pick.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
