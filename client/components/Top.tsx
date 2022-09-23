import text from "../public/text";
import Image from "next/image";
import topImage from "../public/pictures/top.jpeg";

const Top = () => {
  return (
    <div className="top">
      <div className="left">
        <h1>Azusa Nakahashi</h1>
        <h2>Front-end developer</h2>
        {text.data.top.map((text, key) => (
          <p key={key}>{text}</p>
        ))}
      </div>
      <div className="right">
        <Image src={topImage} alt="facePicture" />
      </div>
    </div>
  );
};

export default Top;
