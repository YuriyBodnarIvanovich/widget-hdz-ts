
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
}
