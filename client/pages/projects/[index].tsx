import { useRouter } from "next/router";
import projects from "../../public/data/projects";

const Project = () => {
  const router = useRouter();
  const index = Number(router.query.index);
  const project = projects[index];
  console.log("project", project);
  console.log("index", index);
  return (
    <>
      <main>
        <section>
          <div>
            <p>Image</p>
          </div>
          <div>
            <h2>{project.basicInfo.name}</h2>
            <h3>{project.basicInfo.duration}</h3>
            <p>{project.basicInfo.type}</p>
            <p>{project.basicInfo.explanation}</p>
            <p>{project.basicInfo?.liveURL}</p>
            <p>{project.basicInfo?.github}</p>
          </div>
          <p>Post: {index}</p>
        </section>
        <section>
          <h3>Features</h3>
          <p>{project.features?.explanation}</p>
          <div>
            {project.features?.features.map((feature, key) => (
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
      </main>
    </>
  );
};

export default Project;
