import { validator, validations, } from "./validations"

export function ValidateForm( Information,setFormError) {
    
    let err = {
        nickname: [],
        email: [],
        birthday: [],
        password: [],
    }
    
    if (Information.nickname === "") {
        err.nickname.push(validations.nickname.err)
    }
    
    if (Information.email === "") {
        err.email.push(validations.email.errEmpty)
    } else if (!validator(validations.email.isValidRegex, Information.email)) {
        err.email.push(validations.email.errIsValid)
    }
    
    if (Information.birthday === "") {
        err.birthday.push(validations.birthday.errEmpty)
    }
    
    if (Information.password === "") {
        err.password.push(validations.password.errEmpty)
    } else {
        if (!validator(validations.password.startUppercaseRegex, Information.password)) {
            err.password.push(validations.password.errUppercase)
        }
        
        if (!validator(validations.password.specialSymbolRegex, Information.password)) {
            err.password.push(validations.password.errSpecialSymbol)
        }
        
        if (!validator(validations.password.numberRegex, Information.password)) {
            err.password.push(validations.password.errNumber)
        }
        if (!validator(validations.password.minlength, Information.password)) {
            err.password.push(validations.password.errSpace)
        }
    }
    setFormError(err)
    
    return Object.keys(err).length < 1
};