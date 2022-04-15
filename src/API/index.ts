//f6803026-e93d-4c89-bbee-08d9ba52c1a9
//fb42f9d5-21a5-4bde-bbf2-08d9ba52c1a9

import { flushSync } from "react-dom";

export const mockData = [
    {
        text: 'Hello 1',
        questionType: 1,
        clientId: '',
        questionId: '',
        answerItemResponses: [
            {
                answerId: "3fa85f64-5717-4562-b3fc-2c963f66afa6-10",
                number: 0,
                text: "question 1"
            },
            {
                answerId: "3fa85f64-5717-4562-b3fc-2c963f66afa6-11",
                number: 1,
                text: "question 2"
            },
            {
                answerId: "3fa85f64-5717-4562-b3fc-2c963f66afa6-12",
                number: 3,
                text: "question 3"
            }
        ]
    },
    {
        text: 'Hello 2',
        questionType: 1,
        clientId: '',
        questionId: '',
        answerItemResponses: [
            {
                answerId: "3fa85f64-5717-4562-b3fc-2c963f66afa6-4",
                number: 0,
                text: "question 1"
            },
            {
                answerId: "3fa85f64-5717-4562-b3fc-2c963f66afa6-5",
                number: 1,
                text: "question 2"
            }
        ]
    },
    {
        text: 'Hello 3',
        questionType: 0,
        clientId: '',
        questionId: '',
        answerItemResponses: [
            {
                answerId: "3fa85f64-5717-4562-b3fc-2c963f66afa6-6",
                number: 0,
                text: "question 1"
            },
            {
                answerId: "3fa85f64-5717-4562-b3fc-2c963f66afa6-7",
                number: 1,
                text: "question 2"
            }
        ]
    },
    {
        text: 'Text Question!',
        questionType: 2,
        clientId: '',
        questionId: '',
        answerItemResponses: []
    }
]

export const  getClientId = (name: string,phone: string, email: string, questionnaireId: string) => {    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': '*/*' },
        body: JSON.stringify(
            {
                name: name,
                phone: phone,
                email: email,
                questionnaireId: questionnaireId, 
            }
        )
    };
    return fetch('https://hbz-dev.zubi.gmbh/api/client/create', requestOptions)
        .then(response => response.json())
        .then(data => {
            return data;
    });
}

export const sendAnswer = (clientId: string, answers: string[], comment: string) => {    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': '*/*' },
        body: JSON.stringify(
         {
            clientId:clientId,
            answers: answers,
            comment: comment
          }
        )
    };
    return fetch('https://hbz-dev.zubi.gmbh/api/client/add', requestOptions)
        .then(response => response.json())
        .then(data => {
            return data;
    });
}

export const sendEmailPDf = (clientId: string, questionnaireId: string, template: Blob) => {    
    const fd = new FormData();
    fd.append("template", template, 'result.pdf');
     
    const requestOptions = {
        method: 'POST',
        body: fd
    };

    return fetch(`https://hbz-dev.zubi.gmbh/api/client/send?clientId=${clientId}&questionnaireId=${questionnaireId}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)
    });
}
