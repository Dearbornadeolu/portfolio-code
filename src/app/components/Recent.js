import Link from "next/link"
import Image from "next/image"
import projectData from "./data"

const Recent = () => {
  return (
    <div className='pt-[4rem] px-[90px] ' id="recents">
        <h1 className='text-center text-[18px] md:text-[30px] font-bold'>Recent Projects</h1>
        <ul className="flex flex-col md:flex-row justify-center align-middle items-center gap-5 mt-[50px]">
        {projectData.map((project, index) => (
          <li key={index} className='flex flex-col text-black w-1/2 bg-white shadow-xl p-2 rounded-2xl min-h-[300px]'>
           <div className="flex flex-col items-center">
            <iframe src={project.link} title={project.name} scrolling="no" style={{height:"250px", maxWidth: "300px", overflow:"hidden", border:"none"}} ></iframe>
            <p>{project.description}</p>
           </div>
          </li>
        ))}
      </ul>
      </div>
  )
}

export default Recent