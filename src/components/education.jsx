import {useState} from 'react';

function Education({education, viewMode}){
    const [educationValue, setEducationValue] = useState(education);

    return(
        viewMode ?
            <>
                {
                    educationValue.map((eduobj, i) => {
                        return (
                            <div key={i}>
                                <hr/>
                                <div className="school-grad-title">
                                    <h4>{eduobj.school}</h4>
                                    <h4>{eduobj.gradYear}</h4>
                                </div>
                                <p className="studyField">{eduobj.studyField}</p>
                                <p className="degree">{eduobj.degree}</p>
                                <hr/>
                            </div>
                        )
                    })
                }
            </> :
            <>
                <button
                    onClick={() => {
                        let tmp = structuredClone(educationValue);
                        tmp.push({
                            school: "",
                            gradYear: "",
                            studyField: "",
                            degree: ""
                        })
                        setEducationValue(tmp);
                    }}
                >
                    Add Section
                </button>
                {
                    educationValue.map((eduobj, i) => {
                        return(
                            <div key={i}>
                                <hr/>
                                <button
                                    onClick={e => {
                                        let tmp = structuredClone(educationValue);
                                        tmp.splice(i,1);
                                        setEducationValue(tmp);
                                    }}
                                >
                                    Remove Section
                                </button>

                                <ul>
                                    <li>
                                        <p>School:</p>
                                        <input
                                            placeholder="school"
                                            defaultValue={eduobj.school}
                                            onChange={e=>{
                                                let tmp;
                                                tmp = structuredClone(educationValue);
                                                tmp[i].school = e.target.value;
                                                setEducationValue(tmp);
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <p>Grad Year:</p>
                                        <input
                                            placeholder="grad year"
                                            defaultValue={eduobj.gradYear}
                                            onChange={e=>{
                                                let tmp;
                                                tmp = structuredClone(educationValue);
                                                tmp[i].gradYear = e.target.value;
                                                setEducationValue(tmp);
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <p>Study Field:</p>
                                        <input
                                            placeholder="study field"
                                            defaultValue={eduobj.studyField}
                                            onChange={e=>{
                                                let tmp;
                                                tmp = structuredClone(educationValue);
                                                tmp[i].studyField = e.target.value;
                                                setEducationValue(tmp);
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <p>Degree:</p>
                                        <input
                                            placeholder="degree"
                                            defaultValue={eduobj.degree}
                                            onChange={e=>{
                                                let tmp;
                                                tmp = structuredClone(educationValue);
                                                tmp[i].degree = e.target.value;
                                                setEducationValue(tmp);
                                            }}
                                        />
                                    </li>
                                </ul>
                                <hr/>
                            </div>
                        )
                    })
                }
            </>
    );
};

export default Education;
