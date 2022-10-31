import React, { useState } from "react";
import ExperienceList from "./ExperienceList";
import ExperienceModal from "./ExperienceModal";

function Experience() {
  const [experience, setExperience] = useState([
    {
      id: "first",
      company: "Facebook",
      role: "Data Scientist - Video Team",
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

  function openExperienceModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }

  function handleExperience(data) {
    const organizedData = {
      id: data.id,
      company: data.company,
      role: data.role,
      location: data.location,
      startDate: data.startDate,
      endDate: data.isPresent ? null : data.endDate,
      isPresent: data.isPresent,
      contribution: [],
    };
    setExperience((prevExperience) => {
      return [...prevExperience, organizedData];
    });
  }

  function handleContribution(data) {
    let experienceList = [...experience];
    const expIndex = experienceList.findIndex((exp) => exp.id === data.id);
    experienceList[expIndex].contribution.push(data.data);
    setExperience(experienceList);
  }

  function handleDeleteExperience(id) {
    let experienceList = [...experience];
    setExperience(experienceList.filter((exp) => exp.id !== id));
  }

  return (
    <>
      <section className="experience-section">
        <div className="h3-container">
          <h3>Experience&nbsp;</h3>
        </div>
        <ExperienceList
          experienceList={experience}
          appendedContribution={handleContribution}
          deleteExperience={handleDeleteExperience}
        />
        <div className="add-container" onClick={openExperienceModal}>
          <i className="fa-solid fa-plus"></i>
          <span>Add Experience</span>
        </div>
      </section>
      <ExperienceModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        appendExperience={handleExperience}
      />
    </>
  );
}

export default Experience;
