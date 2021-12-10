import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";

const CompanyList = ({ items }) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    console.debug("CompanyList: search companies");
    searchCompanies();
  }, []);

  async function searchCompanies() {
    let companies = await JoblyApi.getCompanies();
    setCompanies(companies);
  }

  return (
    <div className="CompanyList col-md-8 offset-md-2">
      {companies.length ? (
        <div className="CompanyList-list">
          {companies.map((c) => (
            <CompanyCard
              key={c.handle}
              handle={c.handle}
              name={c.name}
              description={c.description}
              logoUrl={c.logoUrl}
            />
          ))}
        </div>
      ) : (
        <p>No companies found.</p>
      )}
    </div>
  );
};

export default CompanyList;
