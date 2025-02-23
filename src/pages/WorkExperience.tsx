// src/pages/WorkExperience.tsx
import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';

const localTimelineData: TimelineItem[] = [
  {
    timelineType: "work",
    dateRange: "2024",
    title: "Data Science Intern",
    name: "FireLLama Technology Pvt Ltd",
    techStack: "OCR Systems, Data Science, Performance Optimization",
    summaryPoints: [
      "Enhancing Optical Character Recognition (OCR) accuracy",
      "Developing new features using data science methodologies",
      "Optimizing system efficiency",
    ],
  },
  {
    timelineType: "education",
    dateRange: "2021 - 2025",
    title: "B.Tech. Computer Science and Engineering",
    name: "SRM Institute of Science and Technology",
    techStack: "",
    summaryPoints: [
      "Comprehensive 4-Year Program",
      "Advanced Technical Proficiency",
      "Holistic Skill Development",
    ],
    url: "https://www.srmist.edu.in/program/b-tech-computer-science-and-engineering/",
  },
];

const WorkExperience: React.FC = () => {
  const [timeLineData] = useState<TimelineItem[]>(localTimelineData);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleTimelineClick = (url?: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Career & Learning Saga</h2>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={{ 
              background: '#181818', 
              color: '#fff',
            }}
            contentArrowStyle={{ borderRight: '7px solid #181818' }}
            date={item.dateRange}
            dateClassName="timeline-date"
            iconStyle={{ background: item.timelineType === "work" ? '#E50914' : '#3D3D3D' }}
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            <div 
              className="timeline-content" 
              onClick={() => handleTimelineClick(item.url)}
              style={{ cursor: item.url ? 'pointer' : 'default' }}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
              {item.techStack && (
                <p className="vertical-timeline-element-tech">
                  🔧 {item.techStack}
                </p>
              )}
              <div className="summary-points">
                {item.summaryPoints.map((point, i) => (
                  <p key={i} className="summary-point">{point}</p>
                ))}
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: '#00FF00', color: '#000' }}
          contentStyle={{ display: 'none' }}
          contentArrowStyle={{ display: 'none' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;