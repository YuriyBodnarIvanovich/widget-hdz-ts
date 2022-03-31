export const  getClientId = (name: string,phone: string, email: string) => {    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                name: name,
                phone: phone,
                email: email,
                questionnaireId: "f6803026-e93d-4c89-bbee-08d9ba52c1a9"
            }
        )
    };
    return fetch('https://hbz-dev.zubi.gmbh/api/client/create', requestOptions)
        .then(response => response.json())
        .then(data => {
            return data;
    });
}