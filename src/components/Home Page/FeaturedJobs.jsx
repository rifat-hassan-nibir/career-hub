import { useState } from "react";
import { useEffect } from "react";
import FeaturedJob from "./FeaturedJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("/data/jobs.json")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="max-w-[1320px] mx-auto lg:my-[130px] my-[50px]">
      <div className="lg:mb-[32px] mb-[20px]">
        <h1 className="text-[48px] font-extrabold text-center text-[#1A1919]">Featured Jobs</h1>
        <p className="text-center text-[#757575]">
          Explore thousands of job opportunities with all the information you need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[24px] mb-[40px]">
        {jobs.slice(0, dataLength).map((job) => (
          <FeaturedJob job={job} key={job.id}></FeaturedJob>
        ))}
      </div>
      <div className={`text-center ${dataLength === jobs.length && "hidden"}`}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className={`py-[19px] px-[28px] rounded-lg text-white lg:text-[20px] text-[16px] font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] `}
        >
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
