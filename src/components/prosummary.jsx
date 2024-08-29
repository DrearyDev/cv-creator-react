import {useState} from 'react';

function ProSummary({proSummary, viewMode}){
    const [proSummaryValue, setProSummaryValue] = useState(proSummary);

    return(
        viewMode ?
            <p>{proSummaryValue}</p>
        :
            <textarea
                id="prosummary"
                placeholder="Proffesional Summary"
                defaultValue={proSummaryValue}
                onChange={e => {
                    let tmp;
                    tmp = e.target.value;
                    setProSummaryValue(tmp);
                }}
            />
    );
};

export default ProSummary;
