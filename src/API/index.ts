//f6803026-e93d-4c89-bbee-08d9ba52c1a9
//fb42f9d5-21a5-4bde-bbf2-08d9ba52c1a9

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
export const  getClientId = (name: string,phone: string, email: string) => {    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': '*/*' },
        body: JSON.stringify(
            {
                name: name,
                phone: phone,
                email: email,
                questionnaireId: "d5f92316-544f-4116-8e79-08d9c151889e"
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