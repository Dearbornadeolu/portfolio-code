"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import projectData from "./data";

const Recent = () => {
  const [visibleProjects, setVisibleProjects] = useState(3); // Initially display 3 projects

  const showMoreProjects = () => {
    setVisibleProjects(visibleProjects + 3); // Increase the number of visible projects by 3
  };

  const allProjects = projectData.map((project, index) => (
    <li key={index} className="flex flex-col text-black  bg-white shadow-xl p-2 rounded-2xl min-h-[300px]">
      <div className="flex flex-col items-center">
        <iframe
          src={project.link}
          title={project.name}
          scrolling="no"
          style={{ height: "250px", maxWidth: "300px", overflow: "hidden", border: "none" }}
        ></iframe>
        <p>{project.description}</p>
      </div>
    </li>
  ));

  const visibleProjectItems = allProjects.slice(0, visibleProjects);

  return (
    <div className="pt-[4rem] px-[90px]" id="recents">
      <h1 className="text-center text-[18px] md:text-[30px] font-bold">Recent Projects</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center mt-5">
        {visibleProjectItems}
      </ul>
      {visibleProjects < allProjects.length && (
        <div className="text-center mt-3">
          <button onClick={showMoreProjects} className="bg-black text-white p-3 rounded-3xl">Show More Projects</button>
        </div>
      )}
    </div>
  );
};

export default Recent;
