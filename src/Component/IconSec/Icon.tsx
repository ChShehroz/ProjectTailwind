import styleCss from "../../assets/Style/Style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const Icon = () => {
  return (
    <div className={"relative overflow-hidden px-0 py-16"}>
      <div className="w-full px-4 mx-auto xl:max-w-6xl lg:max-w-5xl">
        <div className="flex -mx-4">
          <div className="flex flex-col flex-grow-7 w-[55%] px-4">
            <div>
              <h2 className="mt-8 mb-6 font-semibold text-[#ffffffcc]">
                Free Demo
              </h2>
              <p className="mb-4 text-[#9a9a9a] font-light text-[1.14em]">
                Do you want to test and see the benefits of this Design System
                before purchasing it? You can give the demo version a try. It
                features enough basic components for you to get a feel of the
                design and also test the quality of the code. Get it free on
                GitHub!
              </p>
              <div>
                <button className={`${styleCss.btn} ${styleCss.btn1}`}>
                  View Demo on Github
                </button>
                <button className={`${styleCss.btn} ${styleCss.btnSimple}`}>
                  Star
                </button>
              </div>
            </div>
            <div className="flex flex-row  -mx-4">
              <div className="pt-5 relative w-full px-4">
                <div
                  className={`text-left hover:bg-[#1d8cf8] border-0 relative w-full rounded-lg my-6 ${styleCss.boxShad}`}
                >
                  <div className="p-4 min-h-[1px] flex-auto">
                    <h2
                      className="mt-8 mb-6 font-bold
                     text-2xl"
                    >
                      Free Version
                    </h2>
                    <ul className="m-0 list-none p-0 max-w-[240px]">
                      <li
                        className={`py-3 text-sm list-item ${styleCss.borderBottom}`}
                      >
                        <strong>70</strong> Components
                      </li>
                      <li
                        className={`py-3 text-sm list-item ${styleCss.borderBottom}`}
                      >
                        <strong>3</strong> Example Pages
                      </li>
                      <li
                        className={`items-center py-3 text-sm flex ${styleCss.borderBottom}`}
                      >
                        <FontAwesomeIcon
                          className="h-5 mr-1"
                          icon={faXmark}
                          style={{ color: "#ff0000" }}
                        />{" "}
                        Uncoventional cards
                      </li>
                      <li
                        className={`items-center py-3 text-sm flex ${styleCss.borderBottom}`}
                      >
                        <FontAwesomeIcon
                          className="h-5 mr-1"
                          icon={faXmark}
                          style={{ color: "#ff0000" }}
                        />{" "}
                        Sections
                      </li>
                      <li
                        className={`items-center py-3 text-sm flex ${styleCss.borderBottom}`}
                      >
                        <FontAwesomeIcon
                          className="h-5 mr-1"
                          icon={faXmark}
                          style={{ color: "#ff0000" }}
                        />{" "}
                        Photoshop for Prototype
                      </li>
                      <li
                        className={`items-center py-3 text-sm flex ${styleCss.borderBottom}`}
                      >
                        <FontAwesomeIcon
                          className="h-5 mr-1"
                          icon={faXmark}
                          style={{ color: "#ff0000" }}
                        />{" "}
                        Premium Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pt-5 relative w-full px-4">
                <div
                  className={`text-left hover:bg-[#1d8cf8] border-0 relative w-full rounded-lg my-6 ${styleCss.boxShad}`}
                >
                  <div className="p-4 min-h-[1px] flex-auto">
                    <h2
                      className="mt-8 mb-6 font-bold
                     text-2xl"
                    >
                      PRO Version
                    </h2>
                    <ul className="m-0 list-none p-0 max-w-[240px]">
                      <li
                        className={`py-3 text-sm list-item ${styleCss.borderBottom}`}
                      >
                        <strong>1100+</strong> Components
                      </li>
                      <li
                        className={`py-3 text-sm list-item ${styleCss.borderBottom}`}
                      >
                        <strong>17</strong> Example Pages
                      </li>
                      <li
                        className={`items-center py-3 text-sm flex ${styleCss.borderBottom}`}
                      >
                        <FontAwesomeIcon
                          className="h-5 mr-1"
                          icon={faCheck}
                          style={{ color: "#4ee450" }}
                        />{" "}
                        Uncoventional cards
                      </li>
                      <li
                        className={`items-center py-3 text-sm flex ${styleCss.borderBottom}`}
                      >
                        <FontAwesomeIcon
                          className="h-5 mr-1"
                          icon={faCheck}
                          style={{ color: "#4ee450" }}
                        />{" "}
                        Sections
                      </li>
                      <li
                        className={`items-center py-3 text-sm flex ${styleCss.borderBottom}`}
                      >
                        <FontAwesomeIcon
                          className="h-5 mr-1"
                          icon={faCheck}
                          style={{ color: "#4ee450" }}
                        />{" "}
                        Photoshop for Prototype
                      </li>
                      <li
                        className={`items-center py-3 text-sm flex ${styleCss.borderBottom}`}
                      >
                        <FontAwesomeIcon
                          className="h-5 mr-1"
                          icon={faCheck}
                          style={{ color: "#4ee450" }}
                        />{" "}
                        Premium Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative px-4 w-full lg:w-5/12">
            <div className="absolute h-[810px] -top-[10px] -right-[400px]">
              <FontAwesomeIcon
                className="h-[810px] opacity-[.05] inline-block "
                icon={faGithub}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icon;
