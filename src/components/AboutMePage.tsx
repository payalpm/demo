import { FunctionComponent } from "react";

const AboutMePage: FunctionComponent = () => {
  return (
    <div
      className="absolute top-[1024px] left-[8px] w-[1445px] h-[1045px] overflow-hidden text-left text-lg text-white font-poppins"
      data-scroll-to="aboutMePage"
    >
      <div className="absolute top-[23px] left-[155px] w-[1022px] h-[1146px]">
        <div className="absolute top-[143px] left-[67px] flex flex-col items-center justify-center">
          <img
            className="relative w-[1202.6px] h-[1045px] shrink-0"
            alt=""
            src="../light-shadow.svg"
          />
          <img
            className="relative w-[956.69px] h-[470.52px] shrink-0"
            alt=""
            src="../bg-small-circle.svg"
          />
        </div>
        <div className="absolute top-[178px] left-[34px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[940px] h-[794px]">
          <div className="absolute top-[64px] left-[121.5px] rounded-[350px] [background:linear-gradient(144.11deg,_#c961de,_#2954a3)] w-[697px] h-[630px]">
            <div className="absolute top-[-110px] left-[-165.5px] flex flex-row items-start justify-start">
              <img
                className="relative w-[654px] h-[740px] shrink-0 overflow-hidden"
                alt=""
                src="../designerstandingconfident.svg"
              />
            </div>
            <div className="absolute top-[147px] left-[277.5px] w-[328px] h-[343px]">
              <div className="absolute top-[0px] left-[0px] w-[328px] h-[343px]">
                <b className="absolute top-[0px] left-[25.5px] leading-[130%] inline-block w-[116px] h-[36px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
                  About me
                </b>
                <b className="absolute top-[40px] left-[0px] leading-[130%] inline-block w-[328px] h-[186px] text-base hover:animate-[1s_ease_0s_infinite_normal_none_shadow-pop-tr] hover:opacity-[1]">
                  <p className="[margin-block-start:0] [margin-block-end:17.18px]">
                    <span>{`I’m a creative developer & designer.I work effficently both as an individual contributor as well as along a tesm.I seek new challlenges & try to think out-of-the-box while looking for creative soltion to a given.I offer both designs and development services of web application or Websites `}</span>
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:17.18px] text-3xs">
                    <span>&nbsp;</span>
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:17.18px]">
                    <span>&nbsp;</span>
                  </p>
                  <p className="m-[0]">
                    <span>&nbsp;</span>
                  </p>
                </b>
                <b className="absolute top-[268px] left-[13.5px] text-xs leading-[130%] inline-block w-[263px] h-[75px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-pop-tr] hover:opacity-[1]">{`My goal :- I enjoy sharing experience & Knowledge with those who r willing to learn`}</b>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[608px] left-[611px] flex flex-row items-center justify-center">
          <img
            className="relative w-[360.82px] h-[517.63px] shrink-0"
            alt=""
            src="../group-1166.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
