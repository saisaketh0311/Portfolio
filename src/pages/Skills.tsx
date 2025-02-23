import React, { useEffect } from 'react';
import './Skills.css';

const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', description: 'Scripting & Automation' },
      { name: 'C/C++', description: 'System Programming' },
      { name: "HTML", description: "Markup Language" },
      { name: "CSS", description: "Styling & Layout" }
    ]
  },
  {
    category: 'Backend Development',
    items: [
      { name: 'Node.js', description: 'Runtime Environment' },
      { name: 'SQL', description: 'Database Management' }
    ]
  },
  {
    category: 'Design & Creative',
    items: [
      { name: 'Photoshop', description: 'Photo Editing' },
      { name: 'Illustrator', description: 'Vector Graphics' },
      { name: 'Acrobat', description: 'UI/UX Design' }
    ]
  }
];

const Skills = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="skills-container">
      {skills.map((skillSet, index) => (
        <div key={skillSet.category} className="skill-category">
          <h2>{skillSet.category}</h2>
          <div className="skills">
            {skillSet.items.map((item, itemIndex) => (
              <div 
                className="skill-item" 
                key={item.name}
                style={{ "--delay": `${index * 0.2 + itemIndex * 0.1}s` } as React.CSSProperties}
              >
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
