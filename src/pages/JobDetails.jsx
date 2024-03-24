import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { LiaMapMarkerSolid } from "react-icons/lia";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobDetails = () => {
  const notify = () => toast("Job Added");
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find((job) => job.id === intId);
  const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title } = job;
  const { address, email, phone } = job.contact_information;

  return (
    <div>
      <div style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)" }}>
        <div className="max-w-[1320px] mx-auto pb-[120px] pt-[60px]">
          <h1 className="text-[32px] font-extrabold text-center">Job Details</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[24px] max-w-[1320px] mx-auto py-[100px]">
        <div className="col-span-2">
          <p className="mb-[24px] text-[16px] text-[#757575] font-medium leading-8">
            <span className="font-extrabold text-[#1A1919]">Job Description:</span> {job_description}
          </p>
          <p className="mb-[24px] text-[16px] text-[#757575] font-medium leading-8">
            <span className="font-extrabold text-[#1A1919]">Job Responsibility:</span> {job_responsibility}
          </p>
          <p className="mb-[24px] text-[16px] text-[#757575] font-medium leading-8">
            <span className="font-extrabold text-[#1A1919]">
              Educational Requiements: <br />
            </span>{" "}
            {educational_requirements}
          </p>
          <p className="mb-[24px] text-[16px] text-[#757575] font-medium leading-8">
            <span className="font-extrabold text-[#1A1919]">
              Experience: <br />
            </span>{" "}
            {experiences}
          </p>
        </div>

        {/* Job Details Section */}
        <div>
          <div
            style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.10) 0%, rgba(152, 115, 255, 0.10) 100%)" }}
            className="col-span-1 p-[30px] rounded-lg"
          >
            <h3 className="text-[20px] font-extrabold">Job Details</h3>
            <hr className="my-[24px] border-[1px]" />

            {/* icons + information */}
            <div className="flex items-center gap-[8px] mb-[16px]">
              <CiDollar className="size-6 text-[#9873FF]" />
              <p className="text-[20px] font-medium">
                {" "}
                <span className="text-[20px] font-extrabold text-[#474747]">Salary:</span>{" "}
                <span className="text-[#757575]">{salary} (Per Month)</span>
              </p>
            </div>
            <div className="flex items-center gap-[8px] mb-[32px]">
              <IoBriefcaseOutline className="size-6 text-[#9873FF]" />
              <p className="text-[20px] font-medium">
                {" "}
                <span className="text-[20px] font-extrabold text-[#474747]">Job Title:</span>{" "}
                <span className="text-[#757575]">{job_title}</span>
              </p>
            </div>
            <h3 className="text-[20px] font-extrabold">Contact Information</h3>
            <hr className="my-[24px] border-[1px]" />
            <div className="flex items-center gap-[8px] mb-[16px]">
              <CiPhone className="size-6 text-[#9873FF]" />
              <p className="text-[20px] font-medium">
                {" "}
                <span className="text-[20px] font-extrabold text-[#474747]">Phone:</span> <span className="text-[#757575]">{phone}</span>
              </p>
            </div>
            <div className="flex items-center gap-[8px] mb-[16px]">
              <AiOutlineMail className="size-6 text-[#9873FF]" />
              <p className="text-[20px] font-medium">
                {" "}
                <span className="text-[20px] font-extrabold text-[#474747]">Email:</span> <span className="text-[#757575]">{email}</span>
              </p>
            </div>
            <div className="flex items-center gap-[8px] mb-[16px]">
              <LiaMapMarkerSolid className="size-6 text-[#9873FF]" />
              <p className="text-[20px] font-medium">
                {" "}
                <span className="text-[20px] font-extrabold text-[#474747]">Address:</span>{" "}
                <span className="text-[#757575]">{address}</span>
              </p>
            </div>
          </div>
          <div className="mt-[24px]">
            <button
              onClick={notify}
              className="py-[19px] w-full rounded-lg text-white lg:text-[20px] text-[16px] font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]"
            >
              Start Applying
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
