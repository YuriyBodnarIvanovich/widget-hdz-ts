export const validateName = (name: string) => {
    return name.length === 0 ? ({error: true, message: 'This field is required'}) : ({error: false, message:''});
}

export const validateTelefone = (telefone: string) => {
    const data = telefone.match(/\d/g)?.join('') ?? '';

    if(data.length === 0){
        return ({error: true, message: 'This field is required'})
    }

    return data.length < 10 ? ({error: true, message: 'please enter more than 10 character'}) : ({error: false, message:''});
}

export const validateEmail = (email: string) => {
    // eslint-disable-next-line
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return ({error: false, message:''})
    }

    if(email.length === 0){
        return ({error: true, message: 'This field is required'})
    }

    return ({error: true, message: 'You have entered an invalid email address!'})
}

