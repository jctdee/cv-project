import React, { useState } from "react";
import EducationList from "./EducationList";
import EducationModal from "./EducationModal";

function Education() {
  const [education, setEducation] = useState([
    {
      id: "fifth",
      school: "FEU Institute of Technology",
      degree: "Bachelor of Science in Information Technology",
      location: "Menlo Park, CA",
      startDate: "Sep 2017",
      isPresent: true,
      contribution: [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ad esse veritatis quae minus atque vero earum rerum ducimus saepe! Corporis aliquid sunt eum fuga.",
        "Quasi atque fuga amet et? Nisi tempora sit est iste ut fugit aliquid beatae dolorem! Sapiente temporibus nam numquam nesciunt, fuga laudantium ex officia ut!",
        "Sequi, beatae a labore incidunt iste cupiditate minim a, dicta quidem in saepe officiis error corrupti maxime quas deserunt voluptates accusantium aliquid vero debitis aliquam sint?",
      ],
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  function openEducationModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }

  function handleEducation(data) {
    const organizedData = {
      id: data.id,
      school: data.school,
      degree: data.degree,
      location: data.location,
      startDate: data.startDate,
      endDate: data.isPresent ? null : data.endDate,
      isPresent: data.isPresent,
      contribution: [],
    };
    setEducation((prevEducation) => {
      return [...prevEducation, organizedData];
    });
  }

  function handleContribution(data) {
    let educationList = [...education];
    const educIndex = educationList.findIndex((educ) => educ.id === data.id);
    educationList[educIndex].contribution.push(data.data);
    setEducation(educationList);
  }

  function handleDeleteEducation(id) {
    let educationList = [...education];
    setEducation(educationList.filter((educ) => educ.id !== id));
  }

  return (
    <>
      <section className="education-section">
        <div className="h3-container">
          <h3>Education&nbsp;</h3>
        </div>
        <EducationList
          educationList={education}
          appendedEducation={handleContribution}
          deleteEducation={handleDeleteEducation}
        />
        <div className="add-container" onClick={openEducationModal}>
          <i className="fa-solid fa-plus"></i>
          <span>Add Education</span>
        </div>
        <EducationModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          appendEducation={handleEducation}
        />
      </section>
    </>
  );
}

export default Education;
