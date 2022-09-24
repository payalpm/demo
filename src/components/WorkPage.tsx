import { FunctionComponent, useEffect } from "react";

const WorkPage: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className="absolute top-[2080px] left-[-5px] bg-gray-200 w-[1450px] h-[880px] text-left text-xl text-white font-poppins"
      data-scroll-to="workPageContainer"
    >
      <img
        className="absolute top-[-188px] left-[5px] w-[1683.94px] h-[1400px]"
        alt=""
        src="../background.svg"
      />
      <div
        className="absolute top-[6px] left-[5px] w-[1427px] h-[962px] flex flex-col p-[289px_107px] box-border items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        data-animate-on-scroll
      >
        <div className="relative w-[1149px] h-[399px] shrink-0">
          <div className="absolute top-[93px] left-[0px] w-[380px] h-[280px]">
            <div className="absolute top-[0px] left-[0px] rounded-[30px] bg-gray-900 [backdrop-filter:blur(20px)] w-[380px] h-[280px] overflow-hidden">
              <img
                className="absolute h-[84%] w-[116.58%] top-[5%] right-[-16.58%] bottom-[11%] left-[0%] max-w-full max-h-full object-cover"
                alt=""
                src="../3d-2@2x.png"
              />
            </div>
            <div className="absolute top-[220px] left-[0px] rounded-[0px_0px_30px_30px] bg-gray-800 w-[380px] h-[60px] overflow-hidden">
              <b className="absolute top-[15px] left-[141px] leading-[130%] inline-block">
                Designs
              </b>
            </div>
          </div>
          <div className="absolute top-[98px] left-[769px] w-[380px] h-[280px]">
            <div className="absolute top-[0px] left-[0px] rounded-[30px] bg-gray-900 [backdrop-filter:blur(20px)] w-[380px] h-[280px] overflow-hidden">
              <img
                className="absolute top-[20px] left-[26px] w-[312.03px] h-[249px] object-cover"
                alt=""
                src="../comp-38-2@2x.png"
              />
            </div>
            <div className="absolute top-[220px] left-[0px] rounded-[0px_0px_30px_30px] bg-gray-800 w-[380px] h-[60px] overflow-hidden">
              <b className="absolute top-[15px] left-[134px] leading-[130%] inline-block">
                Mockups
              </b>
            </div>
          </div>
          <div className="absolute top-[69px] left-[354px] w-[440px] h-[330px]">
            <div className="absolute top-[0px] left-[0px] rounded-[30px] bg-gray-700 [backdrop-filter:blur(20px)] w-[440px] h-[330px] overflow-hidden">
              <div className="absolute top-[13px] left-[45px] w-[349.59px] h-[248px]">
                <img
                  className="absolute top-[6.53px] left-[-18.64px] w-[136.9px] h-[252.86px] object-cover"
                  alt=""
                  src="../1@2x.png"
                />
                <img
                  className="absolute top-[-10.72px] left-[96.94px] w-[157.5px] h-[290.9px] object-cover"
                  alt=""
                  src="../2@2x.png"
                />
                <img
                  className="absolute top-[6.53px] left-[231.33px] w-[136.9px] h-[252.86px] object-cover"
                  alt=""
                  src="../3@2x.png"
                />
              </div>
            </div>
            <div className="absolute top-[270px] left-[0px] rounded-[0px_0px_30px_30px] bg-gray-800 w-[440px] h-[60px] overflow-hidden">
              <b className="absolute top-[15px] left-[156px] leading-[130%] inline-block">
                UI Designs
              </b>
            </div>
          </div>
          <b className="absolute top-[0px] left-[456px] text-2xl leading-[130%] inline-block">
            My recent work
          </b>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
