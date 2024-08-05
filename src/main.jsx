import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'

import './styles/index.css'

import Form from './components/form.jsx'
import Cv from './components/cv.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Form/>
        <Cv/>
    </React.StrictMode>,
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

