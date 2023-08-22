import blob from "../../assets/Images/blob.714796fa.png";
import path from "../../assets/Images/path2.2f0ee6e4.png";
import triangle from "../../assets/Images/triangle.png";
import square from "../../assets/Images/square.png";
import waves from "../../assets/Images/download.png";
import circle from "../../assets/Images/circle.png";
import styleCss from "../../assets/Style/Style.module.css";

const FirstSec = () => {
  return (
    <div>
      <div
        className={
          "h-screen min-h-screen max-h-[999px] p-0 relative overflow-hidden flex items-center"
        }
      >
        <img
          className={"absolute opacity-[0.02] w-[65%] right-0 top-9"}
          src={blob}
          alt="..."
        />
        <img
          className={
            "absolute opacity-[0.02] -top-12 -right-[60px] max-w-[41%]"
          }
          src={path}
          alt="..."
        />
        <img
          className={`max-h-[200px] top-[35%] left-[5%] ${styleCss.shapes}`}
          src={triangle}
          alt="..."
        />
        <img
          className={`max-h-[200px] top-[50%] right-[18%] ${styleCss.shapes}`}
          src={square}
          alt="..."
        />
        <img
          className={`max-h-[75px] top-[20%] right-[36%] ${styleCss.shapes}`}
          src={circle}
          alt="..."
        />
        <img
          className={`max-h-[90px] top-[45%] right-[30%] ${styleCss.shapes}`}
          src={waves}
          alt="..."
        />
      </div>
    </div>
  );
};

export default FirstSec;
