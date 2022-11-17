import type { ReactElement } from "react";
import { useRouter } from "next/router";
import Layout from "../../layout/Layout";
import type { NextPageWithLayout } from "../../types/layoutType";
import type { Project } from "../../types/projectType";
import { projectsData } from "../../public/projectData/text/projects";
import Hero from "../../components/project/Hero";
import Feature from "../../components/project/Feature";
import styles from "../../styles/layout/project.module.scss";
import Technology from "../../components/project/Technology";
import Lists from "../../components/project/Lists";

const Project: NextPageWithLayout = () => {
  const router = useRouter();
  const index = Number(router.query.index);
  const project: Project = projectsData[index];
  return (
    <>
      {project && (
        <>
          <div className={styles["project"]}>
            <Hero project={project} />
            <Feature project={project} />
            <Technology project={project} />
            <Lists project={project} />
          </div>
        </>
      )}
    </>
  );
};

Project.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Project;
