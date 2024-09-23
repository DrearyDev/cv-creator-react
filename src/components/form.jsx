import Header from './header.jsx'
import ProSummary from './prosummary.jsx'
import Education from './education.jsx'
import Work from './work.jsx'
import SkillList from './skilllist.jsx'
import CertList from './certlist.jsx'

function Form({
    headerInputs,
    proSummary,
    education,
    workExp,
    skills,
    certs,
    viewMode
}) {

            //<h1>MODE = {viewMode ? "View" : "Edit"}</h1>
    return (
        <>
            {Object.keys(headerInputs).length > 0 ?
                <div className="header">
                    <h1>Header</h1>
                    <Header
                        headerInputs = {headerInputs}

                        viewMode = {viewMode}
                    />
                </div> : ""
            }

            {proSummary ?
                <div className="prosummary">
                    <h1>Proffesional Summary</h1>
                    <ProSummary
                        proSummary = {proSummary}
                        viewMode = {viewMode}
                    />
                </div> : ""
            }


            {education.length > 0 ?
                <div className="education">
                    <h1>Education</h1>
                    <Education
                        education = {education}
                        viewMode = {viewMode}
                    />
                </div> : ""
            }


            {workExp.length > 0 ?
                <div className="workexp">
                    <h1>Work Experience</h1>
                    <Work
                        workExp = {workExp}
                        viewMode = {viewMode}
                    />
                </div> : ""
            }

            {skills.length > 0 ?
                <div className="skills">
                    <h1>Skills</h1>
                    <SkillList
                        skills = {skills}
                        viewMode = {viewMode}
                    />
                </div> : ""
            }

            {certs.length > 0 ?
                <div className="certs">
                    <h1>Certifications</h1>
                    <CertList
                        certs = {certs}
                        viewMode = {viewMode}
                    />
                </div> : ""
            }

        </>
    );
};

export default Form
