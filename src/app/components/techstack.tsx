import React from "react";

interface TechStackItemProps {
  category: string;
  technologies: string;
}

const TechStackItem: React.FC<TechStackItemProps> = ({ category, technologies }) => (
  <div className="flex flex-col sm:flex-row justify-between items-center gap-2 p-4 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-300">
    <span className="font-serif text-gray-800">{category}</span>
    <span className="font-mono text-sm uppercase text-gray-500">{technologies}</span>
  </div>
);

const TechStack: React.FC = () => {
  return (
    <div className="mt-12 text-black">
      <h2 className="text-xl font-bold uppercase text-gray-800 mb-6">Tech Stack</h2>
      <div className="space-y-4">
        <TechStackItem
          category="Languages"
          technologies="Python / JavaScript / TypeScript"
        />
        <TechStackItem
          category="JS Framework"
          technologies="ReactJs / NextJs / React Native / VueJs"
        />
        <TechStackItem
          category="JS Library"
          technologies="Framer Motion / GSAP / D3"
        />
      </div>
    </div>
  );
};

export default TechStack;
