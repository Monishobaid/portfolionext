'use client';
import React, { useState } from "react";

interface ExperienceItemProps {
  title: string;
  company: string,
  location: string,
  date: string,
  points: string[]
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  date,
  points,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePoints = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-serif">
      <div className="flex justify-between items-center mt-4 cursor-pointer" onClick={togglePoints}>
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <div className="flex justify-between text-sm">
            <p className="italic">
              {company}, {location}
            </p>
            <p className="text-gray-400 ml-4">({date})</p>
          </div>
        </div>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          ▼
        </div>
      </div>
      <div
        className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="list-disc p-4">
          {points.map((point, index) => (
            <li key={index} className="text-gray-600">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <div className="mt-12 text-black">
      <h2 className="text-xl font-bold">EXPERIENCE</h2>


      <ExperienceItem
        title="SDE"
        company="FuelBuddy"
        location="Gurugram, India"
        date="June 2024 - Present"
        points={[
          "Shifted the customer application from Vue 3 to React Native, improving cross-platform compatibility and user experience.",
          "Led the development of a dynamic reporting dashboard using React and D3.js, providing real-time data visualization and insights for better decision-making.",
        ]}
      />

      <ExperienceItem
        title="Frontend Developer Intern"
        company="FuelBuddy"
        location="Gurugram, India"
        date="Aug 2023 - June 2024"
        points={[
          "Implemented a streamlined Payment-on-delivery (POD) system for drivers, optimizing transaction processes for improved operational efficiency.",
          "Enhanced the customer application with wallet transaction capabilities via Easebuzz, increasing payment convenience and user satisfaction by 2%.",
          "Revamped franchise application code for improved readability and maintained proficiency in reactivity, component-based architecture, state management, and responsive design principles, leading to a 10% improvement in code maintainability and a 5% increase in development speed.",
        ]}
      />

      <ExperienceItem
        title="Intern"
        company="Miles2Smiles"
        location="Delhi, India"
        date="Sep 2022 - Jan 2023"
        points={[
          "Documented the refugee crisis, capturing over 50 stories to raise awareness and support.",
          "Contributed to the miles2smile.org website, resulting in a 5% increase in user engagement and ensuring effective communication of information.",
        ]}
      />
    </div>
  );
};

export default Experience;
