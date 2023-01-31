/* eslint-disable import/no-anonymous-default-export */
const validations = {
    nickname: {
        err: "Nickname cannot be empty"
    },

    email: {
        errEmpty: "Email cannot be empty",
        errIsValid: "Please enter a valid email",
        isValidRegex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
    },

    birthday: {
        errEmpty: "Birthday cannot be empty"
    },

    password: {
        errEmpty: "Password cannot be empty",
        errUppercase: `Password must start with uppercase`,
        errSpecialSymbol: `Password must contain at least one special character`,
        errNumber: `Password must contain at least one number`,
        errSpace: `Password cannot contain spaces`,
        startUppercaseRegex: /^[A-Z]/,
        specialSymbolRegex: /(?=.?[#?!@$%^&-+*])/,
        numberRegex: /(?=.?\d{1,})/,
        minlength: /.{8,}/
    }
}

function validator(regex, field) {
    return regex.test(field)
}

export {validations,validator}