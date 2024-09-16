import {useState} from 'react'

function CertList({certs, viewMode}) {
    const [certsValue, setCertsValue] = useState(certs);

    return(
        viewMode ?
            <ul>
                {
                    certsValue.map((certobj) => {
                        return(
                            certobj.certLink ?
                                <li key={certobj.id}>
                                    <a href={certobj.certLink}>
                                        {certobj.certName}
                                    </a>
                                </li>
                                :
                                certobj.certName ?
                                    <li key={certobj.id}>{certobj.certName}</li>
                                    : ""
                        );
                    })
                }
            </ul>
            :
            <>
                <button
                    onClick={()=>{
                        let tmp = certsValue.slice();
                        tmp.push({
                            id: certsValue[certsValue.length-1].id + 1,
                            certName: "",
                            certLink: ""
                        })
                        setCertsValue(tmp);
                    }}
                >
                    Add Section
                </button>
                <hr/>
                <ul>
                    {
                        certsValue.map((certobj, i) => {
                            return(
                                <li key={certobj.id}>
                                    <input
                                        placeholder="certName"
                                        defaultValue={certobj.certName}
                                        onChange={e => {
                                            let tmp = certsValue.slice();
                                            tmp[i].certName = e.target.value;
                                            setCertsValue(tmp);
                                        }}
                                    />
                                    <input
                                        placeholder="certLink"
                                        defaultValue={certobj.certLink}
                                        onChange={e => {
                                            let tmp = certsValue.slice();
                                            tmp[i].certLink = e.target.value;
                                            setCertsValue(tmp);
                                        }}
                                    />
                                    <button
                                        onClick={()=>{
                                            let tmp = certsValue.slice();
                                            tmp.splice(i,1);
                                            setCertsValue(tmp);
                                        }}
                                    >
                                        Remove Section
                                    </button>
                                </li>
                            );
                        })
                    }
                </ul>
                <hr/>
            </>
    );

};

export default CertList
