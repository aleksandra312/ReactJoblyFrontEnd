import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";

const JobCardList = ({ jobs }) => {
  return (
    <div className="JobCardList">
      {jobs.map((j) => (
        <JobCard
          key={j.id}
          id={j.id}
          title={j.title}
          salary={j.salary}
          equity={j.equity}
        />
      ))}
    </div>
  );
};

export default JobCardList;
