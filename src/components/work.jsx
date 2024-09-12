import {useState} from 'react'

function Work({workExp, viewMode}){
    const [workExpValue, setWorkExpValue] = useState(workExp);

    function handleRemove(id) {
        const newlist = workExpValue.filter((obj) => obj.id !== id);
        setWorkExpValue(newlist)
    };

    return(
        viewMode ?
            <>
                {
                    workExpValue.map((workobj) => {
                        return(
                            <div key={workobj.id}>
                                <hr/>
                                <div className="job-employment-dates">
                                    <h4>{workobj.jobTitle}</h4>
                                    <h4>{workobj.employmentDates}</h4>
                                </div>
                                <ul>
                                    {
                                        workobj.bulletPoints.map((point, k) => {
                                            return(
                                                point ?
                                                <li key={k}>{point}</li> : ""
                                            );
                                        })
                                    }
                                </ul>
                                <hr/>
                            </div>
                        );
                    })
                }
            </> :
            <>
                <button
                    onClick={() => {
                        let tmp = structuredClone(workExpValue);
                        tmp.push({
                            id: workExpValue.length > 0 ? workExpValue[workExpValue.length-1].id + 1 : 0,
                            jobTitle: "",
                            employmentDates: "",
                            bulletPoints: [
                                "",
                                "",
                                ""
                            ]
                        })
                        setWorkExpValue(tmp);
                    }}
                >
                    Add Section
                </button>
                {
                    workExpValue.map((workobj, i) => {
                        return(
                            <div key={workobj.id}>
                                <hr/>
                                <button
                                    onClick={()=> handleRemove(workobj.id)}
                                >
                                    Remove Section
                                </button>

                                <ul>
                                    <li>
                                        <p>Job Title:</p>
                                        <input
                                            placeholder="job title"
                                            defaultValue={workobj.jobTitle}
                                            onChange={e => {
                                                let tmp;
                                                tmp = structuredClone(workExpValue);
                                                tmp[i].jobTitle = e.target.value;
                                                setWorkExpValue(tmp);
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <p>Employment Dates:</p>
                                        <input
                                            placeholder="employment dates"
                                            defaultValue={workobj.employmentDates}
                                            onChange={e => {
                                                let tmp;
                                                tmp = structuredClone(workExpValue);
                                                tmp[i].employmentDates = e.target.value;
                                                setWorkExpValue(tmp);
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <p>Bullet Points</p>
                                        {workobj.bulletPoints.map((bpoint, k) => {
                                            return(
                                                <input
                                                    key={k}
                                                    placeholder="bullet point"
                                                    defaultValue={bpoint}
                                                    onChange={e => {
                                                        let tmp;
                                                        tmp = structuredClone(workExpValue);
                                                        tmp[i].bulletPoints[k] = e.target.value;
                                                        setWorkExpValue(tmp);
                                                    }}
                                                />
                                            )
                                        })}
                                    </li>
                                </ul>
                                <hr/>
                            </div>
                        );
                    })
                }
            </>
    );
};
export default Work
