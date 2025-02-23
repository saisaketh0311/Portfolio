import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

const ProfileBanner: React.FC = () => {
  const bannerData = {
    headline: 'Data Detective by Day, Cyber Guardian by Night',
    profileSummary: 'Enter the digital realm where every line of code is a plot twist. As a BTech CSE student, I am diving headfirst into the exhilarating worlds of cybersecurity and data science—where cutting-edge innovation meets the suspense of defending our digital frontier. Just like your favorite Netflix original, my journey unfolds with unexpected twists, relentless passion, and a promise of breakthrough moments.',
    resumeLink: { url: 'https://drive.google.com/file/d/1y1nYpbpwKmDsccXG7Q1x9gBL6aXezpZ2/view?usp=share_link' },
    linkedinLink: 'https://www.linkedin.com/in/2003saisaketh',
  };

  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(bannerData.linkedinLink, '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>
        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
