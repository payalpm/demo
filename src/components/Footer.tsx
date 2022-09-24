import { FunctionComponent, useCallback } from "react";

const Footer: FunctionComponent = () => {
  const onTwitterLinkClick = useCallback(() => {
    window.open(
      "https://twitter.com/manghnani_11?t=AOGdW7aLaSwmTCqFF-8qzw&s=09"
    );
  }, []);

  const onLinkedinClick = useCallback(() => {
    window.open(
      "https://twitter.com/manghnani_11?t=AOGdW7aLaSwmTCqFF-8qzw&s=09"
    );
  }, []);

  const onYouTubeLinkClick = useCallback(() => {
    window.open(
      "https://twitter.com/manghnani_11?t=AOGdW7aLaSwmTCqFF-8qzw&s=09"
    );
  }, []);

  return (
    <div className="absolute top-[4096px] left-[0px] bg-indigo-300 w-[1440px] h-[400px] overflow-hidden text-left text-sm text-white font-poppins">
      <div className="absolute top-[8px] left-[0px] w-[1440px] h-[392px] overflow-hidden">
        <div className="absolute top-[100px] left-[394px] w-[653px] flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row p-[10px] box-border items-start justify-start">
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../home.svg"
              />
            </div>
            <div className="flex flex-row p-[10px] box-border items-start justify-start">
              <div className="relative leading-[143.2%] inline-block">Home</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row p-[10px] box-border items-start justify-start">
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../person-outline.svg"
              />
            </div>
            <div className="flex flex-row p-[10px] box-border items-start justify-start">
              <div className="relative leading-[143.2%] inline-block">
                About me
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row p-[10px] box-border items-start justify-start">
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../work.svg"
              />
            </div>
            <div className="flex flex-row p-[10px] box-border items-start justify-start">
              <div className="relative leading-[143.2%] inline-block">Work</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row p-[10px] box-border items-start justify-start">
              <div className="flex flex-row p-[2px] box-border items-start justify-start">
                <img
                  className="relative w-[19px] h-[19px] shrink-0"
                  alt=""
                  src="../vector-189.svg"
                />
              </div>
            </div>
            <div className="flex flex-row p-[10px] box-border items-start justify-start">
              <div className="relative leading-[143.2%] inline-block">
                Contact
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[202px] left-[580px] w-[222px] flex flex-row items-center justify-between">
          <a className="[text-decoration:none] relative w-[48px] h-[48px] shrink-0 overflow-hidden">
            <img
              className="absolute h-[83.33%] w-[83.33%] top-[8.33%] right-[8.33%] bottom-[8.33%] left-[8.33%] max-w-full max-h-full"
              alt=""
              src="../circle.svg"
            />
            <img
              className="absolute h-[50%] w-[50%] top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full max-h-full"
              alt=""
              src="../instagram-icon.svg"
            />
          </a>
          <a
            className="[text-decoration:none] relative w-[48px] h-[48px] shrink-0 overflow-hidden cursor-pointer"
            href={`https://twitter.com/manghnani_11?t=AOGdW7aLaSwmTCqFF-8qzw&s=09`}
            target="_blank"
            onClick={onTwitterLinkClick}
          >
            <img
              className="absolute h-[83.33%] w-[83.33%] top-[8.33%] right-[8.33%] bottom-[8.33%] left-[8.33%] max-w-full max-h-full"
              alt=""
              src="../circle1.svg"
            />
            <img
              className="absolute h-[40.63%] w-[50%] top-[29.17%] right-[25%] bottom-[30.2%] left-[25%] max-w-full max-h-full"
              alt=""
              src="../twitter.svg"
            />
          </a>
          <a
            className="[text-decoration:none] relative w-[48px] h-[48px] shrink-0 overflow-hidden cursor-pointer"
            href="https://www.linkedin.com/in/payal-manghnani-5645991a7/"
            target="_blank"
            onClick={onLinkedinClick}
          >
            <img
              className="absolute h-[83.33%] w-[83.33%] top-[8.33%] right-[8.33%] bottom-[8.33%] left-[8.33%] max-w-full max-h-full"
              alt=""
              src="../circle2.svg"
            />
            <img
              className="absolute h-[43.38%] w-[45.83%] top-[25%] right-[25%] bottom-[31.62%] left-[29.17%] max-w-full max-h-full"
              alt=""
              src="../linkedin-icon.svg"
            />
          </a>
          <a
            className="[text-decoration:none] relative w-[48px] h-[48px] shrink-0 overflow-hidden cursor-pointer"
            href="https://youtu.be/E0HuAS3SFMs"
            target="_blank"
            onClick={onYouTubeLinkClick}
          >
            <img
              className="absolute h-[83.33%] w-[83.33%] top-[8.33%] right-[8.33%] bottom-[8.33%] left-[8.33%] max-w-full max-h-full"
              alt=""
              src="../circle3.svg"
            />
            <img
              className="absolute h-[37.5%] w-[53.55%] top-[31.25%] right-[23.54%] bottom-[31.25%] left-[22.92%] max-w-full max-h-full"
              alt=""
              src="../subtract.svg"
            />
          </a>
        </div>
        <div className="absolute top-[308px] left-[40px] bg-gray-500 w-[1360px] h-[2px]" />
        <div className="absolute top-[335px] left-[1156px] text-2xs leading-[143.2%] font-medium text-gray-600 inline-block">
          Terms of Service - Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default Footer;
