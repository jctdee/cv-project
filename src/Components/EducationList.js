import React from "react";
import EducationItem from "./EducationItem";

function EducationList({ educationList, appendedEducation, deleteEducation }) {
  return educationList.map((educ) => {
    return (
      <EducationItem
        key={educ.id}
        education={educ}
        appendedEducation={appendedEducation}
        deleteEducation={deleteEducation}
      />
    );
  });
}

export default EducationList;
