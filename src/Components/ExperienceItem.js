import React, { useState } from "react";
import ContributionModal from "./ContributionModal";
import uuid from "react-uuid";

function ExperienceItem({ exp, appendedContribution, deleteExperience }) {
  const [isOpen, setIsOpen] = useState(false);

  function openContributionModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }

  function handleContrubition(data) {
    appendedContribution({
      id: exp.id,
      data: data,
    });
  }

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this experience?")) {
      deleteExperience(exp.id);
    } else {
      console.log(false);
    }
  }

  return (
    <>
      <div className="item">
        <div className="item-header">
          <p>{exp.company}</p>
          <i className="fa-regular fa-trash-can" onClick={handleDelete}></i>
          <p>{exp.location}</p>
        </div>
        <div className="item-subheader">
          <p>{exp.role}</p>
          <p>
            {exp.startDate} - {exp.isPresent ? "now" : exp.endDate}
          </p>
        </div>
        <ul>
          {exp.contribution.map((contri) => (
            <li key={uuid()}>{contri}</li>
          ))}
          <div
            className="contribution-container"
            onClick={openContributionModal}
          >
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

export default ExperienceItem;
