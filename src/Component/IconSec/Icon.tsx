import styleCss from "../../assets/Style/Style.module.css";

const Icon = () => {
  return (
    <div className={"overflow-hidden px-0 py-16"}>
      <div className="w-full px-4 mx-auto xl:max-w-6xl lg:max-w-5xl">
        <div className="flex flex-wrap -mx-4">
          <div className="flex flex-grow-7 w-full px-4">
            <div>
              <h2 className="mt-8 mb-6 font-semibold text-[#ffffffcc]">
                Free Demo
              </h2>
              <p className="mb-4 text-[#9a9a9a] font-light text-base">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icon;
