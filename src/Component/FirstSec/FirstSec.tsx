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
          "h-screen min-h-screen p-0 relative overflow-hidden flex items-center"
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
        <div className=" w-full px-[15px] max-w-max pt-[12vh] pb-[40px] mx-auto h-full z-[1]">
          <div className="flex flex-col justify-center items-center leading-[1.05] z-[2] text-center text-[#ffffffcc] h-full mx-auto py-0 px-4 sm:px-6 lg:px-8 max-w-screen-lg">
            <h1 className="text-[5em] mb-8">
              BLK•{" "}
              <small className="uppercase text-[#ff8d72] font-semibold">
                Pro react
              </small>
            </h1>
            <h3 className="text-[#fffcc] mb-9 font-normal text-2xl">
              Start the Development With this Badass Bootstrap 4 Design System.
            </h3>
            <button className="border mt-4 border-[#ff8d72] text-[#ff8d72] hover:bg-[#ff8d72] hover:text-white rounded-lg px-12 py-3 text-base  transition duration-300">
              BUT NOW
            </button>
            <br />
            <a
              href="#pablo"
              className=" mt-4 inline-block text-[#ff8d72]  hover:text-white rounded-lg px-6 py-3 text-sm font-semibold transition duration-300"
            >
              <u>Show pricing</u>
            </a>
          </div>
        </div>
      </div>
      <div className={"h-[110px] block"}></div>
    </div>
  );
};

export default FirstSec;
