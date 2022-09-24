import { FunctionComponent, useEffect } from "react";

const ContactPage: FunctionComponent = () => {
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
      className="absolute top-[3063px] left-[5px] bg-gray-200 w-[1440px] h-[1033px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left text-2xs text-white font-poppins"
      data-scroll-to="contactPageContainer"
      data-animate-on-scroll
    >
      <div className="absolute top-[609px] left-[1083px] flex flex-row items-start justify-start">
        <img
          className="relative w-[560px] h-[960px] shrink-0 active:animate-[1s_ease_0s_infinite_normal_none_shadow-pop-tr] active:opacity-[1]"
          alt=""
          src="../ellipse-1433.svg"
        />
      </div>
      <div className="absolute top-[31px] left-[251px] flex flex-row items-start justify-start">
        <img
          className="relative w-[1184px] h-[1402px] shrink-0"
          alt=""
          src="../group-1201.svg"
        />
      </div>
      <div className="absolute top-[212px] left-[270px] rounded-[30px] bg-indigo-400 [backdrop-filter:blur(20px)] flex flex-col p-[53px_90px] box-border items-start justify-start">
        <div className="relative w-[719px] h-[494px] shrink-0">
          <div className="absolute top-[0px] left-[379px] flex flex-col items-start justify-start gap-[20px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
            <b className="relative text-xl leading-[143.2%] inline-block">
              Send me a message
            </b>
            <blockquote className="m-[0] rounded-[10px] bg-gray-1000 shadow-[0px_10px_20px_rgba(139,_140,_164,_0.15)] w-[340px] h-[40px] shrink-0 flex flex-row p-[10px_10px_10px_20px] box-border items-start justify-start">
              <div className="relative leading-[143.2%] inline-block">Name</div>
            </blockquote>
            <button className="cursor-pointer [border:none] p-[10px_10px_10px_20px] bg-gray-1000 rounded-[10px] shadow-[0px_10px_20px_rgba(7,_7,_26,_0.15)] w-[340px] h-[40px] shrink-0 flex flex-row box-border items-start justify-start">
              <div className="relative text-2xs leading-[143.2%] font-poppins text-white text-left inline-block">
                Email Adress
              </div>
            </button>
            <h2 className="m-[0] rounded-[10px] bg-gray-1000 shadow-[0px_10px_20px_rgba(7,_7,_26,_0.15)] w-[340px] h-[40px] shrink-0 flex flex-row p-[10px_10px_10px_20px] box-border items-start justify-start text-[inherit] font-inherit">
              <div className="relative leading-[143.2%] inline-block">
                Subject
              </div>
            </h2>
            <h3 className="m-[0] rounded-[10px] bg-gray-1000 shadow-[0px_10px_20px_rgba(7,_7,_26,_0.15)] [backdrop-filter:blur(20px)] w-[340px] h-[200px] shrink-0 flex flex-row p-[10px_10px_10px_20px] box-border items-start justify-start text-[inherit] font-inherit">
              <div className="relative leading-[143.2%] inline-block">
                Your message
              </div>
            </h3>
            <button className="cursor-pointer [border:none] p-[10px] bg-[transparent] rounded-[10px] [background:linear-gradient(105.95deg,_#c961de,_#2954a3)] shadow-[0px_10px_20px_rgba(7,_7,_26,_0.15)] w-[160px] h-[40px] shrink-0 flex flex-row box-border items-center justify-center active:bg-fuchsia-200">
              <div className="relative text-2xs leading-[143.2%] font-poppins text-white text-left inline-block">
                Send message
              </div>
            </button>
          </div>
          <div
            className="absolute top-[0px] left-[6px] w-[252px] h-[197px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-xl"
            data-animate-on-scroll
          >
            <b className="absolute top-[0px] left-[3px] leading-[143.2%] inline-block">
              Get in touch
            </b>
            <div className="absolute top-[53px] left-[0px] text-sm leading-[143.2%] inline-block w-[252px]">
              I’m very approachable and would love to speak to you. Feel free to
              call, send me an email . Follow me in social media or simply
              complete the enquiry form.
            </div>
          </div>
          <div className="absolute top-[265px] left-[0px] flex flex-col items-start justify-start gap-[14px]">
            <div className="flex flex-row items-center justify-center">
              <div className="relative w-[173px] h-[40px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[30px] bg-gray-1000 flex flex-row p-[10px] box-border items-start justify-start">
                  <img
                    className="relative w-[20px] h-[20px] shrink-0"
                    alt=""
                    src="../path.svg"
                  />
                </div>
                <div className="absolute top-[9.5px] left-[56px] leading-[143.2%] inline-block">
                  1-514-456-2753
                </div>
              </div>
            </div>
            <div className="relative w-[235px] h-[40px] shrink-0">
              <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-center gap-[16px]">
                <div className="rounded-[30px] bg-gray-1000 h-[40px] flex flex-row p-[10px] box-border items-center justify-center">
                  <img
                    className="relative w-[20px] h-[16px] shrink-0"
                    alt=""
                    src="../exclude.svg"
                  />
                </div>
                <div className="relative leading-[143.2%] inline-block">
                  payalpm111@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
