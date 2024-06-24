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
      <h2 className="text-xl font-bold uppercase">Projects</h2>
      <div className="italic items-center">
        coming soon ...
      </div>
    </div>
  );
};

export default TechStack;