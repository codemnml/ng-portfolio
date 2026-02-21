"use client";

import projects from './projects.data';

export default function ProjectsPage() {
    return (
        <div className="flex-grow w-full bg-gradient-to-r from-[#D7DDE8] to-[#FEFEFE] pt-[7.2rem] min-h-screen px-4 md:px-0">
            <div className="max-w-6xl mx-auto">
                <blockquote className="border-l-[4px] border-[#888888] pl-4 mb-7 mx-4 md:mx-0">
                    <h1 className="font-roboto text-[#292b2c] tracking-[0.1rem] text-3xl md:text-[3rem] font-medium leading-none">
                        Projects
                    </h1>
                </blockquote>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.name} className="flex flex-col bg-transparent mb-6 border-none">
                            <div className="relative overflow-hidden pt-[100%] cursor-pointer group rounded-t-sm" onClick={() => window.open(project.link, '_blank')}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="absolute object-cover w-full h-full inset-0 m-auto transition-transform duration-300 group-hover:scale-105"
                                    src={project.imgUrl}
                                    alt={`${project.name} preview`}
                                />
                            </div>
                            <div className="bg-[#FEFEFE] p-5 shadow-sm rounded-b-sm flex-grow">
                                <h4 className="font-roboto text-xl text-[#333333] font-medium mb-3">{project.name}</h4>
                                <p className="text-[0.75rem] tracking-[0.125rem] text-[#444444] mt-3 mb-4 leading-relaxed">
                                    {project.description}
                                    <span
                                        className="text-[#2200CC] font-arial text-[0.75rem] underline font-bold tracking-[0.1rem] cursor-pointer ml-2 hover:text-blue-800"
                                        onClick={() => window.open(project.link, '_blank')}
                                    >
                                        Link
                                    </span>
                                </p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="text-[#FEFEFE] text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-full bg-[#555555]">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.apis.map(api => (
                                        <span key={api} className="text-[#FEFEFE] text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-full bg-[#34495e]">
                                            {api}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
