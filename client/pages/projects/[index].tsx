import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { projectsData } from "../../public/data/projects";

const Project = () => {
  const router = useRouter();
  const index = Number(router.query.index);
  const project = projectsData[index];
  useEffect(() => {});
  return (
    <>
      <Header />
      <p>Post: {index}</p>
      <main>
        <section>
          <div>
            <p>Image</p>
          </div>
          <div>
            <h2>{project?.basicInfo.name}</h2>
            <h3>{project?.basicInfo.duration}</h3>
            <p>{project?.basicInfo.type}</p>
            <p>{project?.basicInfo.explanation}</p>
            <p>{project?.basicInfo?.liveURL}</p>
            <p>{project?.basicInfo?.github}</p>
          </div>
        </section>
        <section>
          <h3>Features</h3>
          <p>{project?.features?.explanation}</p>
          <div>
            {project?.features?.features.map((feature, key) => (
              <div key={key}>
                <div>
                  <p>Image</p>
                </div>
                <p>{feature.keyphrase}</p>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h3>Technology</h3>
          {project?.technology.techs.map((name, key) => (
            <p key={key}>{name}</p>
          ))}
          <p>{project?.technology.explanation}</p>
        </section>
      </main>
      <footer>
        <h3>©2022 Azusa Nakahashi</h3>
      </footer>
    </>
  );
};

export default Project;
