import user from "../../../public/assets/images/user.png";

const Banner = () => {
  return (
    <div style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)" }}>
      <div className="flex lg:flex-row flex-col justify-between items-center max-w-[1320px] mx-auto">
        <div>
          <h1 className="lg:text-[80px] lg:text-left text-center text-[32px] lg:leading-[100px] font-extrabold text-[#1A1919] lg:w-[570px] mb-[24px]">
            One Step Closer To Your{" "}
            <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text"> Dream Job</span>
          </h1>
          <p className="text-[18px] font-medium text-[#757575] lg:leading-[30px] lg:w-[519px] mb-[32px]">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job
            application from start to finish.
          </p>
          <button className="py-[19px] px-[28px] rounded-lg text-white lg:text-[20px] text-[16px] font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            Get Started
          </button>
        </div>
        <div>
          <img className="lg:ml-[70px] lg:block hidden" src={user} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
