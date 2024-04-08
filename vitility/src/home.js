import React from "react";

export default function Home() {
  return (
    <>
      <h1 className="homeheading">
        Welcome to <span>Vitility</span>
      </h1>
      <h2 className="homedescription">Vitian's one stop utility website.</h2>
      <h3 className="browse"> Browse Tools</h3>
      <div className="cardscontainer">
      <div className="cards">
      <div class="card">
        <h2>GPA Calculator</h2>
        <p>Calculates GPA on the basis of expected Grades</p>
      </div>
      <div class="card">
        <h2>CGPA Calcualtor</h2>
        <p>Calculates CGPA on the basis of Credits and expected GPA</p>
      </div>
      <div class="card">
        <h2>Attendance Calculator</h2>
        <p>Manages your Attendance like a PRO</p>
      </div>
      <div class="card">
        <h2>GPA Needed</h2>
        <p>Calculates the required GPA to achieve a particular CGPA</p>
      </div>
      <div class="card">
        <h2>Grade Calculator</h2>
        <p>Estimates the Grade on the basis of Marks and average</p>
      </div>
      <div class="card">
        <h2>Course Materials</h2>
        <p>Offers combined PDFs of notes from best faculties</p>
      </div>
      <div class="card">
        <h2>Recommended Books</h2>
        <p>PDFs of Books and recommendations for CAT2</p>
      </div>
      <div class="card">
        <h2>Block Allocation</h2>
        <p>Guide for the room types and other tips</p>
      </div>

      </div>
      </div>
    </>
  );
}
