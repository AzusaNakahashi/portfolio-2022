import text from "../public/text";
const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <div className="introduction">
        <div className="text-box">
          {text.data.about.map((text, key) => {
            return <p key={key}>{text}</p>;
          })}
        </div>
        <p>see more</p>
      </div>
      <div className="skills"></div>
    </div>
  );
};

export default About;
