import {useState} from 'react'

function SkillList({ skills, viewMode }) {
    const [skillsValue, setSkillsValue] = useState(skills);

    function handleRemove(id){
        const newlist = skillsValue.filter((obj) => obj.id !== id);
        setSkillsValue(newlist);
    };

    return(
        viewMode ?
            <>
                <hr/>
                <ul>
                    {
                        skillsValue.map((skill, i) => {
                            return(
                                skill.skill ?
                                    <li key={skill.id}>{skill.skill}</li> : ""
                            );
                        })
                    }
                </ul>
                <hr/>
            </>
            :
            <>
                <button onClick={()=> {
                    let tmp = skillsValue.slice();
                    tmp.push({
                        id: skillsValue[skillsValue.length-1].id + 1,
                        skill: ""
                    })
                    setSkillsValue(tmp);
                }}
                >
                    Add Section
                </button>
                <hr/>
                <ul>
                    {
                        skillsValue.map((skill, i) => {
                            return(
                                <li key={skill.id}>
                                    <input
                                        placeholder="skill"
                                        defaultValue={skill.skill}
                                        onChange={e => {
                                            let tmp = skillsValue.slice();
                                            tmp[i].skill = e.target.value;
                                            setSkillsValue(tmp);
                                        }}
                                    />
                                    <button
                                        onClick={()=> handleRemove(skill.id)}
                                    >
                                        Remove Section
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
            </>
    );
};

export default SkillList
