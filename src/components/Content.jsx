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
export default function Content() {
  function CustomInput({ questionId, prompt, type }) {
    const [value, setValue] = useState("");

    return (
      <>
        <label htmlFor={questionId}>{prompt}</label>
        <input
          type={type}
          id={questionId}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </>
    );
  }

  return (
    <div className="content">
      <div className="left-content">
        <div className="gen-questions">
          <ul>
            {generalQuestions.map((question) => (
              <li key={question.questionId}>
                <CustomInput
                  questionId={question.questionId}
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
                  type={question.type}
                  prompt={question.prompt}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right-content"></div>
    </div>
  );
}
