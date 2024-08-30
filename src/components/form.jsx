import Header from './header.jsx'
import ProSummary from './prosummary.jsx'
import Education from './education.jsx'

function Form({
    headerInputs,
    proSummary,
    education,
    workExp,
    skills,
    certs,
    viewMode
}) {

    return (
        <>
            <h1>MODE = {viewMode ? "View" : "Edit"}</h1>

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
        </>
    );
};

export default Form
