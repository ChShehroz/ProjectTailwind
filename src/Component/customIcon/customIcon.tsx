import {
  faBold,
  faBus,
  faCartShopping,
  faCircleExclamation,
  faEarthAsia,
  faFaceSmile,
  faHeadphonesSimple,
  faHeart,
  faImage,
  faPalette,
  faPaperPlane,
  faPlaceOfWorship,
  faPuzzlePiece,
  faRocket,
  faThumbtack,
  faWandMagicSparkles,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import styleCss from "../../assets/Style/Style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble, faReact } from "@fortawesome/free-brands-svg-icons";

const CustomIcon = () => {
  return (
    <div className="relative py-44 w-full px-4 mx-auto">
      <div className="flex -mx-4">
        <div className="sm:w-1/6 lg:w-1/4 flex relative w-full px-4">
          <div className="w-full h-full relative -top-12">
            <FontAwesomeIcon
              className="h-16 absolute -top-[25%] left-[10%]"
              style={{ color: "#e14eca" }}
              icon={faPaperPlane}
            />
            <FontAwesomeIcon
              className="h-9 absolute top-[0] left-[45%]"
              style={{ color: "#ff8d72" }}
              icon={faCircleExclamation}
            />
            <FontAwesomeIcon
              className="h-6 absolute top-[30%] left-[65%]"
              style={{ color: "#1d8cf8" }}
              icon={faCartShopping}
            />
            <FontAwesomeIcon
              className="h-12 absolute top-[70%] left-[10%]"
              style={{ color: "#344675" }}
              icon={faBold}
            />
            <FontAwesomeIcon
              className="h-10 absolute top-[45%] left-[30%]"
              style={{ color: "#fd5d93" }}
              icon={faHeadphonesSimple}
            />
            <FontAwesomeIcon
              className="h-10 absolute top-[120%] left-[35%]"
              style={{ color: "#00f2c3" }}
              icon={faFaceSmile}
            />
            <FontAwesomeIcon
              className="h-11 absolute top-[35%] left-[85%]"
              style={{ color: "#344675" }}
              icon={faCartShopping}
            />
            <FontAwesomeIcon
              className="h-8 absolute top-[90%] left-[55%]"
              style={{ color: "#1d8cf8" }}
              icon={faRocket}
            />
            <FontAwesomeIcon
              className="h-9 absolute top-[40%] left-[5%]"
              style={{ color: "#ff8d72" }}
              icon={faWater}
            />
            <FontAwesomeIcon
              className="h-9 absolute top-[75%] left-[80%]"
              style={{ color: "#fd5d93" }}
              icon={faHeart}
            />
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-2/3 flex flex-col relative w-full justify-center text-center px-16 col-span-8 sm:col-span-8 lg:col-span-6">
          <h1 className="mt-8 mb-6 font-bold text-4xl text-[#ffffffcc]">
            Custom Icons
          </h1>
          <p className="mb-1 text-[#9a9a9a] font-light">
            BLK• Design System PRO React comes with 100 custom demo icons made
            by our friends from NucleoApp. The official package contains over
            20.729 icons which are looking great in combination with BLK• Design
            System PRO React. Make sure you check all of them and use those that
            you like the most.
          </p>
          <br />
          <div className="flex justify-center ">
            <button
              className={`${styleCss.btn} ${styleCss.btnCustomIcon1} ${styleCss.btn1}`}
            >
              View Demo Icons
            </button>
            <button
              className={`${styleCss.btn} ${styleCss.btnCustomIcon2} ${styleCss.btn1}`}
            >
              View All Icons
            </button>
          </div>
        </div>
        <div className="sm:w-1/6 lg:w-1/4 flex relative w-full px-4">
          <div className="w-full h-full relative -top-12">
            <FontAwesomeIcon
              className="h-16 absolute -top-[25%] right-[10%]"
              style={{ color: "#ff8d72" }}
              icon={faPalette}
            />
            <FontAwesomeIcon
              className="h-9 absolute top-[0] right-[45%]"
              style={{ color: "#e14eca" }}
              icon={faDribbble}
            />
            <FontAwesomeIcon
              className="h-6 absolute top-[30%] right-[65%] transform rotate-45"
              style={{ color: "#1d8cf8" }}
              icon={faThumbtack}
            />
            <FontAwesomeIcon
              className="h-12 absolute top-[70%] right-[10%]"
              style={{ color: "#344675" }}
              icon={faWandMagicSparkles}
            />
            <FontAwesomeIcon
              className="h-10 absolute top-[45%] right-[30%]"
              style={{ color: "#fd5d93" }}
              icon={faPlaceOfWorship}
            />
            <FontAwesomeIcon
              className="h-10 absolute top-[120%] right-[35%]"
              style={{ color: "#ff8d72" }}
              icon={faBus}
            />
            <FontAwesomeIcon
              className="h-8 absolute top-[35%] right-[85%]"
              style={{ color: "#00f2c3" }}
              icon={faImage}
            />
            <FontAwesomeIcon
              className="h-8 absolute top-[90%] right-[55%]"
              style={{ color: "#1d8cf8" }}
              icon={faEarthAsia}
            />
            <FontAwesomeIcon
              className="h-9 absolute top-[40%] right-[5%]"
              style={{ color: "#e14eca" }}
              icon={faPuzzlePiece}
            />
            <FontAwesomeIcon
              className="h-9 absolute top-[75%] right-[80%]"
              style={{ color: "#344675" }}
              icon={faReact}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomIcon;
