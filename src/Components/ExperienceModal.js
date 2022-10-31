import React, { useState, useRef } from "react";
import ReactDom from "react-dom";
import uuid from "react-uuid";

function ExperienceModal({ isOpen, onClose, appendExperience }) {
  const [isPresent, setIsPresent] = useState(false);
  const company = useRef();
  const role = useRef();
  const location = useRef();
  const startDate = useRef();
  const endDate = useRef();

  if (!isOpen) return;

  function toggleIsPresent(e) {
    setIsPresent(!isPresent);
  }

  function onSubmit() {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();

    let savedEndDate;
    if (isPresent) {
      savedEndDate = null;
    } else {
      savedEndDate = endDate.current.value;
    }
    let experience = {
      id: uuid(),
      company: company.current.value,
      role: role.current.value,
      location: location.current.value,
      startDate: startDate.current.value,
      endDate: savedEndDate,
      isPresent: isPresent,
    };
    appendExperience(experience);
    onClose();
  }

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="experience-modal-body">
        <form onSubmit={onSubmit}>
          <label htmlFor="modal-company">Company</label>
          <input
            type="text"
            name="modal-company"
            id="modal-company"
            ref={company}
          />
          <label htmlFor="modal-role">Role</label>
          <input type="text" name="modal-role" id="modal-role" ref={role} />
          <label htmlFor="modal-location">Location</label>
          <input
            type="text"
            name="modal-location"
            id="modal-location"
            ref={location}
          />
          <label htmlFor="modal-start-date">Start Date</label>
          <input
            type="date"
            name="modal-start-date"
            id="modal-start-date"
            ref={startDate}
          />
          <div className="present-container">
            <input
              type="checkbox"
              name="modal-present"
              id="modal-present"
              onClick={toggleIsPresent}
            />
            <label htmlFor="modal-present">Present</label>
          </div>
          {!isPresent && (
            <>
              <label htmlFor="modal-end-date">End Date</label>
              <input
                type="date"
                name="modal-end-date"
                id="modal-end-date"
                ref={endDate}
              />
            </>
          )}
          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default ExperienceModal;
