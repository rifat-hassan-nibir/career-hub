/* eslint-disable react/prop-types */

import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const FeaturedJob = ({ job }) => {
  const { id, logo, job_title, company_name, location, job_type, salary, remote_or_onsite } = job;
  return (
    <div className="p-[40px] border-[1px] border-gray-200 rounded-lg">
      <img className="w-[120px] mb-[32px]" src={logo} alt="" />
      <h3 className="text-[24px] font-extrabold text-[#474747]">{job_title}</h3>
      <p className=" text-[20px] text-[#757575] font-semibold mb-[16px]">{company_name}</p>
      <div className="flex gap-[16px] mb-[16px]">
        <button className="border-[1px] border-[#9873FF] text-[16px] font-extrabold rounded py-[9px] px-[19px] text-[#7E90FE]">
          {remote_or_onsite}
        </button>
        <button className="border-[1px] border-[#9873FF] text-[16px] font-extrabold rounded py-[9px] px-[19px] text-[#7E90FE]">
          {job_type}
        </button>
      </div>
      <div className="flex gap-[24px] mb-[24px]">
        <div className="flex gap-[8px] items-center">
          <CiLocationOn className="text-[24px]" />
          <p className="text-[20px] text-[#757575] font-semibold">{location}</p>
        </div>
        <div className="flex gap-[8px] items-center">
          <CiDollar className="text-[24px]" />
          <p className="text-[20px] text-[#757575] font-semibold">{salary}</p>
        </div>
      </div>
      <Link to={`/job/${id}`}>
        <button className="py-[11px] px-[18px] rounded text-white lg:text-[20px] text-[16px] font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default FeaturedJob;
