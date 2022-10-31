import React from "react";

export default function Header() {
  return (
    <header>
      <h1 contentEditable>John Doe</h1>
      <ul>
        <li contentEditable>Software Engineer</li>
        <li contentEditable>Bachelor of Science in Information Technology</li>
        <li contentEditable>FEU Insitute of Technology</li>
      </ul>
      <ul>
        <li>
          <i className="fa-solid fa-mobile-screen"></i>
          <span contentEditable>+63 927 991 9608</span>
        </li>
        <li>
          <i className="fa-solid fa-inbox"></i>
          <span contentEditable>johndee@gmail.com</span>
        </li>
        <li>
          <i className="fa-brands fa-linkedin"></i>
          <span contentEditable>linkedin</span>
        </li>
      </ul>
    </header>
  );
}
