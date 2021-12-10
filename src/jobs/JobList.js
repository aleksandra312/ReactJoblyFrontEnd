import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import JobCardList from "./JobCardList";
import SearchForm from "../common/SearchForm";

const JobList = ({ items }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    console.debug("JobList: search companies");
    searchJobs();
  }, []);

  async function searchJobs(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  return (
    <div className="JobList col-md-8 offset-md-2">
      <SearchForm search={searchJobs} />
      {jobs.length ? <JobCardList jobs={jobs} /> : <p>No jobs found.</p>}
    </div>
  );
};

export default JobList;
