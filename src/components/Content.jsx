import { useState } from "react";
import "/src/styles/Content.css";

const generalQuestions = [
  { questionId: "fname", type: "text", prompt: "First Name" },
  { questionId: "lname", type: "text", prompt: "Last Name" },
  { questionId: "email", type: "email", prompt: "Email" },
  { questionId: "pnumber", type: "tel", prompt: "Phone number" },
];
const eduQuestions = [
  { questionId: "sname", type: "text", prompt: "School Name" },
  { questionId: "degree", type: "text", prompt: "Degree" },
  { questionId: "studyDate", type: "date", prompt: "Date of Study" },
];
const practicalQuestions = [
  { questionId: "compName", type: "text", prompt: "Company Name" },
  { questionId: "jobTitle", type: "text", prompt: "Job Title" },
  { questionId: "jobDuties", type: "text", prompt: "Job Duties" },
  { questionId: "startDate", type: "date", prompt: "Start Date" },
  { questionId: "endDate", type: "date", prompt: "End Date" },
];
function CustomInput({ questionId, prompt, type, resume, setResume }) {
  return (
    <>
      <label htmlFor={questionId}>{prompt}</label>
      <input
        type={type}
        id={questionId}
        onChange={(event) =>
          setResume({ ...resume, [questionId]: event.target.value })
        }
      />
    </>
  );
}

export default function Content() {
  const [resume, setResume] = useState({});

  return (
    <div className="content">
      <div className="left-content">
        <div className="gen-questions">
          <ul>
            {generalQuestions.map((question) => (
              <li key={question.questionId}>
                <CustomInput
                  questionId={question.questionId}
                  resume={resume}
                  setResume={setResume}
                  type={question.type}
                  prompt={question.prompt}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="edu-questions">
          <ul>
            {eduQuestions.map((question) => (
              <li key={question.questionId}>
                <CustomInput
                  questionId={question.questionId}
                  resume={resume}
                  setResume={setResume}
                  type={question.type}
                  prompt={question.prompt}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="practical-questions">
          <ul>
            {practicalQuestions.map((question) => (
              <li key={question.questionId}>
                <CustomInput
                  questionId={question.questionId}
                  resume={resume}
                  setResume={setResume}
                  type={question.type}
                  prompt={question.prompt}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right-content">
        <div className="resume-content">
          <h1 className="name-container">
            {resume.fname} {resume.lname}
          </h1>
          <div className="name-subcontainer">
            <span className="p-number">
              <img className="icon" src="/src/assets/phone.svg" alt="" />
              &nbsp;
              <a href={"tel:" + resume.pnumber}>{resume.pnumber}</a>
            </span>
            &nbsp; | &nbsp;
            <span className="email">
              <img className="icon" src="/src/assets/email.svg" alt="" />
              &nbsp;
              <a href={"mailto:" + resume.email}>{resume.email}</a>
            </span>
          </div>
          <hr />
          <div className="education-container">
            <h2>Education</h2>
            <div className="education-details">
              <b>{resume.sname}</b> {resume.degree}
              <div>{resume.studyDate}</div>
            </div>
          </div>
          <div className="work-container">
            <h2>Work Experience</h2>
            <span>
              {resume.compName} {resume.jobTitle}
            </span>
            <span>
              {resume.startDate}-{resume.endDate}
            </span>
            <ul>
              <li>{resume.jobDuties}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
