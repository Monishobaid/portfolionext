import React from "react";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  date: string;
  points: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  date,
  points,
}) => (
  <div className="font-serif ">
    <h3 className="text-sm mt-2 font-semibold">{title}</h3>
    <div className="flex justify-between text-sm">
      <p className="italic">
        {company}, {location}
      </p>
      <p className=" text-gray-400">({date})</p>
    </div>
    <ul className="list-disc p-4">
      {points.map((point, index) => (
        <li key={index} className="text-gray-600">
          {point}
        </li>
      ))}
    </ul>
  </div>
);
const Experience: React.FC = () => {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold">EXPERIENCE</h2>

      <ExperienceItem
        title="Frontend Developer"
        company="FuelBuddy"
        location="Gurugram, India"
        date="Aug 2023 - Present"
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
