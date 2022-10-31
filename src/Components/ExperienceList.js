import React from "react";
import ExperienceItem from "./ExperienceItem";

function ExperienceList({
  experienceList,
  appendedContribution,
  deleteExperience,
}) {
  return experienceList.map((exp) => {
    return (
      <ExperienceItem
        key={exp.id}
        exp={exp}
        appendedContribution={appendedContribution}
        deleteExperience={deleteExperience}
      />
    );
  });
}

export default ExperienceList;
