import Header from './header.jsx'

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
        </>
    );
};

export default Form
