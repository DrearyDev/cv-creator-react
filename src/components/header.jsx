import {useState} from 'react';
import phone from '../assets/phone.png'
import email from '../assets/email.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

function Header({headerInputs, viewMode}) {
    const [headerInputsValue, setHeaderInputsValue] = useState(headerInputs);

    return(
        viewMode ?
            //create a function to convert links without 'https://' to still work
            <ul>
                {headerInputsValue.name[0] ? //only render if value given
                <li className="name">
                    <a href={headerInputsValue.name[1]}>
                        {headerInputsValue.name[0]}
                    </a>
                </li> : ""}

                {headerInputsValue.phoneNum[0] ?
                <li>
                    <img className="icon" src={phone} />
                    <a href={headerInputsValue.phoneNum[1]}>
                        {headerInputsValue.phoneNum[0]}
                    </a>
                </li> : "" }

                {headerInputsValue.email[0] ?
                <li>
                    <img className="icon" src={email} />
                    <a href={headerInputsValue.email[1]}>
                        {headerInputsValue.email[0]}
                    </a>
                </li> : ""}

                {headerInputsValue.github[0] ?
                <li>
                    <img className="icon" src={github} />
                    <a href={headerInputsValue.github[1]}>
                        {headerInputsValue.github[0]}
                    </a>
                </li> : ""}

                {headerInputsValue.linkedin[0] ?
                <li>
                    <img className="icon" src={linkedin} />
                    <a href={headerInputsValue.linkedin[1]}>
                        {headerInputsValue.linkedin[0]}
                    </a>
                </li> : ""}
            </ul>
        :
            <ul>
                <li>
                    <p>Name: </p>
                    <input
                        id="name"
                        placeholder="name"
                        defaultValue={headerInputsValue.name[0]}

                        onChange={e => {
                            let tmp;
                            tmp = structuredClone(headerInputsValue);
                            tmp.name[0] = e.target.value;
                            setHeaderInputsValue(tmp);
                        }}
                    />
                    <input
                        id="name-link"
                        placeholder="optional link (https://example.com)"
                        defaultValue={headerInputsValue.name[1]}
                        
                        onChange={e => {
                            let tmp;
                            tmp = structuredClone(headerInputsValue);
                            tmp.name[1] = e.target.value;
                            setHeaderInputsValue(tmp);
                        }}
                    />
                </li>

                <li>
                    <p>Phone Number: </p>
                    <input
                        id="phonenumber"
                        placeholder="phonenumber"
                        defaultValue={headerInputsValue.phoneNum[0]}

                        onChange={e => {
                            let tmp;
                            tmp = structuredClone(headerInputsValue);
                            tmp.phoneNum[0] = e.target.value;
                            setHeaderInputsValue(tmp);
                        }}
                    />
                    <input
                        id="phonenumber-link"
                        placeholder="optional link (https://example.com)"
                        defaultValue={headerInputsValue.phoneNum[1]}

                        onChange={e => {
                            let tmp;
                            tmp = structuredClone(headerInputsValue);
                            tmp.phoneNum[1] = e.target.value;
                            setHeaderInputsValue(tmp);
                        }}
                    />
                </li>

                <li>
                    <p>Email: </p>
                    <input
                        id="email"
                        placeholder="email"
                        defaultValue={headerInputsValue.email[0]}

                        onChange={e => {
                            let tmp;
                            tmp = structuredClone(headerInputsValue);
                            tmp.email[0] = e.target.value;
                            setHeaderInputsValue(tmp);
                        }}
                    />
                    <input
                        id="email-link"
                        placeholder="optional link (https://example.com)"
                        defaultValue={headerInputsValue.email[1]}

                        onChange={e => {
                            let tmp;
                            tmp = structuredClone(headerInputsValue);
                            tmp.email[1] = e.target.value;
                            setHeaderInputsValue(tmp);
                        }}
                    />
                </li>

                <li>
                    <p>Github: </p>
                    <input
                        id="github"
                        placeholder="github"
                        defaultValue={headerInputsValue.github[0]}

                        onChange={e => {
                            let tmp;
                            tmp = structuredClone(headerInputsValue);
                            tmp.github[0] = e.target.value;
                            setHeaderInputsValue(tmp);
                        }}
                    />
                    <input
                        id="github-link"
                        placeholder="optional link (https://example.com)"
                        defaultValue={headerInputsValue.github[1]}

                        onChange={e => {
                            let tmp;
                            tmp = structuredClone(headerInputsValue);
                            tmp.github[1] = e.target.value;
                            setHeaderInputsValue(tmp);
                        }}
                    />
                </li>

                <li>
                    <p>Linkedin: </p>
                    <input
                        id="linkedin"
                        placeholder="linkedin"
                        defaultValue={headerInputsValue.linkedin[0]}

                        onChange={e => {
                            let tmp;
                            tmp = structuredClone(headerInputsValue);
                            tmp.linkedin[0] = e.target.value;
                            setHeaderInputsValue(tmp);
                        }}
                    />
                    <input
                        id="linkedin-link"
                        placeholder="optional link (https://example.com)"
                        defaultValue={headerInputsValue.linkedin[1]}

                        onChange={e => {
                            let tmp;
                            tmp = structuredClone(headerInputsValue);
                            tmp.linkedin[1] = e.target.value;
                            setHeaderInputsValue(tmp);
                        }}
                    />
                </li>
            </ul>
    );
};

export default Header
