import { useState } from "react";
import { useEffect } from "react";
import FeaturedJob from "./FeaturedJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    fetch("../../../public/data/jobs.json")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  console.log(jobs);

  return (
    <div className="max-w-[1320px] mx-auto lg:my-[130px] my-[50px]">
      <div className="lg:mb-[32px] mb-[20px]">
        <h1 className="text-[48px] font-extrabold text-center text-[#1A1919]">Featured Jobs</h1>
        <p className="text-center text-[#757575]">
          Explore thousands of job opportunities with all the information you need. Its your future
        </p>
      </div>
      <div>
        {jobs.map((job) => (
          <FeaturedJob job={job} key={job.id}></FeaturedJob>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
