import React from "react";


const TechStack: React.FC = () => {
  return (
    <div className="py-6 border-t border-gray-300 mt-14 flex items-center justify-between font-mono text-xs text-black">
        <div className="credits font-medium hover:text-orange-500 hover:font-semibold transition-all select-none">Monish Obaid.</div>
        <div>
            <div className="flex select-none gap-4 justify-end items-center text-gray-500">
                <a href="/projects" className="cursor-pointer hover:text-gray-800 transition-all">Projects</a>
                <a href="/contact" className="cursor-pointer hover:text-gray-800 transition-all">Contact</a>
            </div>
        </div>
    </div>
  );
};

export default TechStack;
