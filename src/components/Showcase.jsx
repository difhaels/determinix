import React, { useEffect, useState } from "react";
import Divider from "../elements/Divider";
import Title from "../elements/Title";
import CardShowCase from "../elements/CardShowCase";
import More from "../elements/More";

export default function Showcase() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  const projectSlice = projects ? projects.slice(0, 3) : [];

  return (
    <div>
      <Divider />
      <Title what={"Showcase"} />
      <div className="flex justify-center py-10 flex-wrap gap-3">
        {projectSlice.map((project) => {
          return (
            <CardShowCase
              key={project._id}
              id={project._id}
              title={project.title}
              date={project.date}
              members={
                Array.isArray(project.members)
                  ? project.members.map((member) => member.name)
                  : []
              }
              img={project.img}
              full={true}
            />
          );
        })}
      </div>
      <More what={"Showcases"} where={"showcase"} />
    </div>
  );
}
