import Image from "next/image"; // Ensure Image is imported correctly
import { socialMedia } from "@/constants";

const Contact = () => {
  return (
    <footer className="w-full lg:pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="flex flex-col items-center px-4">
        <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-white text-center lg:max-w-[45vw]">
          Ready to take{" "}
          <span className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            your
          </span>{" "}
          digital presence to the next level?
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white md:mt-5 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:anupamasanthosh730@gmail.com">
          <button
            className={`relative inline-flex h-12 w-full sm:w-48 md:w-60 mt-5 sm:mt-8 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none text-black`}
          >
            <span
              className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[conic-gradient(#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] px-7 text-sm font-medium text-black backdrop-blur-3xl gap-2`}
            >
              Let us get in touch
            </span>
          </button>
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 px-4">
        <p className="text-xs sm:text-sm md:text-base text-white font-light">
          Copyright © 2024 Anupama K
        </p>

        <div className="flex items-center gap-6 md:gap-3 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 "
            >
              <Image
                src={info.img} // Ensure info.img is a valid URL or path
                alt={info.alt} // Provide alt text for accessibility
                width={20} // Width of the image
                height={20} // Height of the image
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
