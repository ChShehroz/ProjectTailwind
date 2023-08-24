import styleCss from "../../assets/Style/Style.module.css";

const CustomIcon = () => {
  return (
    <div className="relative px-0 py-44">
      <div className="w-full px-4 mx-auto">
        <div className="flex -mx-4">
          <div className="sm:w-1/6 lg:w-1/4 flex relative w-full px-4">
            div1
          </div>
          <div className="lg:w-1/2 sm:w-2/3 flex flex-col relative w-full justify-center text-center px-16 col-span-8 sm:col-span-8 lg:col-span-6">
            <h1 className="mt-8 mb-6 font-bold text-4xl text-[#ffffffcc]">
              Custom Icons
            </h1>
            <p className="mb-1 text-[#9a9a9a] font-light">
              BLK• Design System PRO React comes with 100 custom demo icons made
              by our friends from NucleoApp. The official package contains over
              20.729 icons which are looking great in combination with BLK•
              Design System PRO React. Make sure you check all of them and use
              those that you like the most.
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
            div3
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomIcon;
