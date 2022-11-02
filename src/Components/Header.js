import React, { useState } from "react";

export default function Header() {
  const [name, setName] = useState("John Doe");
  const [job, setJob] = useState("Software Engineer");
  const [degree, setDegree] = useState(
    "Bachelor of Science in Information Technology"
  );
  const [school, setSchool] = useState("FEU Institute of Technology");
  const [number, setNumber] = useState("+63 912 345 6789");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [linkedin, setLinkedin] = useState("johndoe");

  function changeName(e) {
    e.preventDefault();
    setName(e.target.innerText);
  }

  function changeJob(e) {
    e.preventDefault();
    setJob(e.target.innerText);
  }

  function changeDegree(e) {
    e.preventDefault();
    setDegree(e.target.innerText);
  }

  function changeSchool(e) {
    e.preventDefault();
    setSchool(e.target.innerText);
  }

  function changeNumber(e) {
    e.preventDefault();
    setNumber(e.target.innerText);
  }

  function changeEmail(e) {
    e.preventDefault();
    setEmail(e.target.innerText);
  }

  function changeLinkedin(e) {
    e.preventDefault();
    setLinkedin(e.target.innerText);
  }

  return (
    <header>
      <h1 contentEditable onInput={changeName}>
        {name}
      </h1>
      <ul>
        <li contentEditable onInput={changeJob}>
          {job}
        </li>
        <li contentEditable onInput={changeDegree}>
          {degree}
        </li>
        <li contentEditable onInput={changeSchool}>
          {school}
        </li>
      </ul>
      <ul>
        <li>
          <i className="fa-solid fa-mobile-screen"></i>
          <span contentEditable onInput={changeNumber}>
            {number}
          </span>
        </li>
        <li>
          <i className="fa-solid fa-inbox"></i>
          <span contentEditable onInput={changeEmail}>
            {email}
          </span>
        </li>
        <li>
          <i className="fa-brands fa-linkedin"></i>
          <span contentEditable onInput={changeLinkedin}>
            {linkedin}
          </span>
        </li>
      </ul>
    </header>
  );
}
