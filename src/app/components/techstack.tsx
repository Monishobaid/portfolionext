import React from "react";

interface TechStackItemProps {
  category: string;
  technologies: string;
}

const TechStackItem: React.FC<TechStackItemProps> = ({ category, technologies }) => (
  <div className="flex sm:items-center gap-2 sm:gap-0 sm:justify-between flex-col sm:flex-row">
    <span className="font-serif">{category}</span>
    <span className="font-mono text-sm uppercase">{technologies}</span>
  </div>
);

const TechStack: React.FC = () => {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold uppercase">TECH STACK</h2>
      <div className="mt-2">
        <div className="main-stack space-y-4">
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
    </div>
  );
};

export default TechStack;