import React, { useState } from "react";
import ContributionModal from "./ContributionModal";
import uuid from "react-uuid";

function EducationItem({ education, appendedEducation, deleteEducation }) {
  const [isOpen, setIsOpen] = useState(false);

  function openEducationModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }

  function handleContrubition(data) {
    appendedEducation({
      id: education.id,
      data: data,
    });
  }

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this experience?")) {
      deleteEducation(education.id);
    }
  }

  return (
    <>
      <div class="item">
        <div className="item-header">
          <p>{education.school}</p>
          <i className="fa-regular fa-trash-can" onClick={handleDelete}></i>
          <p>{education.location}</p>
        </div>
        <div className="item-subheader">
          <p>{education.degree}</p>
          <p>
            {education.startDate} -{" "}
            {education.isPresent ? "now" : education.endDate}
          </p>
        </div>
        <ul>
          {education.contribution.map((educ) => (
            <li key={uuid()}>{educ}</li>
          ))}
          <div className="contribution-container" onClick={openEducationModal}>
            <i className="fa-solid fa-plus"></i>
            <span>Add Contribution</span>
          </div>
        </ul>
        <ContributionModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          appendContribution={handleContrubition}
        />
      </div>
    </>
  );
}

export default EducationItem;
