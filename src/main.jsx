import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'

import './styles/index.css'

import Form from './components/form.jsx'

const headerInputs = {
    //["Content to display", "Optional Link"]
    name: ["Jhon Doe", null],
    phoneNum: ["123-456-7890", null],
    email: ["fakeemail@email.com", "mailto:fakeemail@email.com"],
    github: ["jhondoe", "https://github.com/jhondoe"],
    linkedin: ["jhondoe4", null]
};

const proSummary = `Hardworking Software Engineer with more than five years of experience
with frontend development and 3 years of experience with full-stack development.`;

const education = [
    {
        id: 0,
        school: "Carter G Woodson High-School",
        gradYear: "2016 - 2020",
        studyField: "", // leaving blank should not render anything for that option
        degree: "High school Degree"
    },
    {
        id: 1,
        school: "Fake School University",
        gradYear: "2020 - 2024",
        studyField: "Computer Science",
        degree: "Computer Science"
    },
];

const workExp = [
    {
        id: 0,
        jobTitle: "Frontend Software Engineer",
        employmentDates: "2002 - 2020",
        bulletPoints: [
            "Utilize CSS to style webpages (frontend)",
            "Utilize React to add functionality to webpages (frontend)",
            "Utilize JSX with React to streamline development"
        ]
    },
    {
        id: 1,
        jobTitle: "Fullstack Software Engineer",
        employmentDates: "2021 - 2024",
        bulletPoints: [
            "Utilize Node to validate user input (backend)",
            "Validate/Store Passwords for user Accounts",
            "Further skills with Frontend tools"
        ]
    }
];

const skills = [
    {
        id: 0,
        skill: "HTML"
    },
    {
        id: 1,
        skill: "CSS"
    },
    {
        id: 2,
        skill: "Javascript"
    },
    {
        id: 3,
        skill: "React"
    },
    {
        id: 4,
        skill: "Linux"
    },
    {
        id: 5,
        skill: "Node"
    },
    {
        id: 6,
        skill: "JSON"
    },
    {
        id: 7,
        skill: "JSX"
    }
];

const certs = [
    {
        id: 0,
        certName: "Comptia A+",
        certLink: "https://www.comptia.org/certifications/a"
    },
    {
        id: 1,
        certName: "Comptia Network+",
        certLink: "https://www.comptia.org/certifications/network"
    },
    {
        id: 2,
        certName: "Comptia Security+",
        certLink: "https://www.comptia.org/certifications/security"
    },
    {
        id: 3,
        certName: "Comptia Linux+",
        certLink: "https://www.comptia.org/certifications/linux"
    }
];

function HandleVisible({headerInputs, proSummary, education, workExp, skills, certs}) {
    const [viewModeValue, setViewModeValue] = useState(true)

    return(
        <>
            <button 
                className="modeBtn"
                onClick={() => setViewModeValue(viewModeValue ? false : true)}
            >
                {viewModeValue ? "Edit" : "View"}
            </button>

            <Form
                headerInputs = {headerInputs}
                proSummary = {proSummary}
                education = {education}
                workExp = {workExp}
                skills = {skills}
                certs = {certs}
                viewMode = {viewModeValue}
            />
        </>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HandleVisible
            headerInputs = {headerInputs}
            proSummary = {proSummary}
            education = {education}
            workExp = {workExp}
            skills = {skills}
            certs = {certs}
        />
    </React.StrictMode>
)

/*

Use a button to switch between form mode and cv mode. Form mode should have
many inputs with the text that will be shown in cv mode. Cv mode should just
display the text from the form. Since both components need access to the values
from the inputs, they will need to be passed through as props and updated from
a parent. The parent will handle the state of the values.

values to get from user:
- header
    - name
    - phone number
    - email address
    - github account
    - linkedin account
- professional summary
    - (briefly explain your work experience, skills and education)
    - (reasons you are good for the job)
- education
    - schools name
    - graduation year
    - field of study
    - degree obtained (if applicable)
- work experience
    - job title
        - employment dates
        - employer name
        - employer location
        - bullet points describing relevant duties/accomplishments
- skills
- certifications

*/

