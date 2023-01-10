/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./SignUp.css"
import { validator, validations, } from "./FormValidator"

export default function SignUp() {
    const [formError, setFormError] = useState({})

    const navigate = useNavigate()

    const [ShowPassword, setShowPassword] = useState("password")

    const [Information, setInformation] = useState({
        email: '',
        nickname: "",
        birthday: "",
        password: ''
    })

    function validateForm() {

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

        console.log(formError)

        return Object.keys(err).length < 1
    }

    function home() {
        const isValid = validateForm()
        if (isValid) {
            navigate('/home')
        }
    }

    function handleChange(e) {
        const { name, value } = e.target
        setInformation(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function setInputType() {
        if (ShowPassword === "password") {
            setShowPassword("text")
        } else
            setShowPassword("password")
    }

    return (
        <div className="wallpaper-SignUp  d-flex justify-content-center">
            <div className=" px-2 my-auto text-center signup">
                <div>
                    <label className="mt-1" htmlFor="">Nickname</label>
                </div>
                <input className="m-0 mt-3" onChange={handleChange} type="text" name="nickname" id="nickname" />
                {formError.nickname?.map(error => <p className='my-0'>{error}</p>)}
                <div>
                    <label className="mt-1" htmlFor="">Email</label>
                </div>
                <input className="m-0 mt-3" onChange={handleChange} type="text" name="email" id="email" />
                {formError.email?.map(error => <p className='my-0'>{error}</p>)}
                <div>
                    <label className="mt-1" htmlFor="">Birthday</label>
                </div>
                <input className="m-0 mt-3" onChange={handleChange} type="date" name="birthday" id="birthday" />
                {formError.birthday?.map(error => <p className='my-0'>{error}</p>)}
                <div>
                    <label className="mt-1" htmlFor="">Password</label>
                </div>
                <input className="m-0 mt-3" onChange={handleChange} type={ShowPassword} name="password" id="password" />
                {formError.password?.map(error => <p className='my-0'>{error}</p>)}
                <div>
                    <input className="w-auto mt-3 mx-2" onClick={() => setInputType()} type="checkbox" id="showPassword" />
                    <label htmlFor="showPassword">Show password</label>
                </div>
                <button className="mx-2 Button" onClick={() => home()}>Log In</button>
            </div>
        </div >
    )
}
