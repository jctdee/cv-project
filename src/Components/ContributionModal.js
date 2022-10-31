import React, { useRef } from "react";
import ReactDom from "react-dom";

function ContributionModal({ isOpen, onClose, appendContribution }) {
  const contribution = useRef();

  if (!isOpen) return;

  function onSubmit() {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
    appendContribution(contribution.current.value);
    onClose();
  }

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="contribution-modal-body">
        <form onSubmit={onSubmit}>
          <textarea rows="3" cols="20" ref={contribution}></textarea>
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

export default ContributionModal;
