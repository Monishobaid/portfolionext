import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string;
  link?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  link,
}) => (
  <div className="p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-300 h-full w-full flex flex-col justify-between">
    <div>
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
    <div>
      <p className="text-xs text-gray-500 mt-4 font-mono uppercase">
        {technologies}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-blue-500 hover:underline"
        >
          View Project
        </a>
      )}
    </div>
  </div>
);

const ProjectsSection: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "Shopping Cart",
      description:
        "An e-commerce app with Firebase authentication, Pinia state management, and advanced search and sorting features. Users can log in, search for products, and sort by price or the latest updates for a smooth shopping experience.",
      technologies: "Vue, TypeScript, Pinia, Firebase, Local Storage, Tailwind CSS",
      link: "https://demo-eight-amber.vercel.app/",
    },
    {
      title: "Typing Test",
      description:
        "A web app to boost typing speed and accuracy. Features include multiple test durations, real-time WPM and accuracy feedback, and progress tracking visualized with Chart.js. The app emphasizes functionality with a no-frills UI, offering users a distraction-free environment to improve their typing skills.",
      technologies: "React, Javascript, Chart.js, Tailwind CSS",
      link: "https://typo-kappa.vercel.app/",
    },
    {
      title: "Social Event Website",
      description:
        "Created SocialWocial.in for an event with a footfall of 20,000 people, enhancing event management and participant engagement.The website featured a live feed, event schedule, and a gallery of photos and videos.",
      technologies: "Nextjs, Tailwind CSS, Gsap",
      link: "https://www.socialwocial.in/",
    },
  ];

  return (
    <section className="mt-12 text-black">
      <h2 className="text-xl font-bold uppercase text-black mb-8">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 auto-rows-fr">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div key={index} className="flex">
              <Project {...project} />
            </div>
          ))
        ) : (
          <div className="italic text-gray-600">Coming soon...</div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
