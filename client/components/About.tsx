import text from "../public/text";
import styles from "../styles/about.module.scss";
const About = () => {
  return (
    <div className={styles["about"]} id="about">
      <h2>About</h2>
      <div className="text-container">
        <div className="text">
          {text.data.about.map((page, key) => {
            return (
              <div key={key} className={`page-${key}`}>
                {page.map((paragraph, key) => {
                  return <p key={key}>{paragraph}</p>;
                })}
              </div>
            );
          })}
        </div>
        <p onClick={() => console.log("this can be dots")}>next page → </p>
        <p>and more...</p>
      </div>
      <div className="skills"></div>
    </div>
  );
};

export default About;
