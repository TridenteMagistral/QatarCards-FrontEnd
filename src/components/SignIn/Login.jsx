/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./login.css"



export default function Login() {

    function ValidateEmail(email) {
        return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email)
    }

    const navigate = useNavigate()

    const [ShowPassword, setShowPassword] = useState("password")

    const [MessageError, setMessageError] = useState(false)

    const [information, setInformation] = useState({
        email: '',
        password: ''
    })

    function home() {
        if ( information.nickname === ""||   information.password === "" || information.email === "" || !ValidateEmail(information.email)) {
            setMessageError(true)
            return
        }

        navigate(`/home`)
    }

    function SignUp() {
        navigate(`/signup`)
    }

    function ForgotPassword() {
        navigate(`/forgotPassword`)
    }

    function handleChange(e) {
        setMessageError(false)
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
        <div className="wallpaper-login d-flex justify-content-center">
            <div className="login mx-auto my-auto text-center">
                <div className="mx-4">
                    <div>
                        <label className="mt-4" htmlFor="">Email</label>
                    </div>
                    <input className="m-0" onChange={handleChange} type="text" name="email" id="" />
                    {MessageError &&
                        <div>
                            <p className=''>I didn't write anything</p>
                        </div>
                    }

                </div>
                <div className="mx-4">
                    <div >
                        <label className="mt-4" htmlFor="">Password</label>
                    </div>
                    <input className="m-0" onChange={handleChange} type={ShowPassword} name="password" id="" />
                    {MessageError &&
                        <div>
                            <p className=''>I didn't write anything</p>
                        </div>
                    }
                    <div>
                        <input className="w-auto mt-3 mx-2" onClick={() => setInputType()} type="checkbox" />
                        <label for="showPassword">Show password</label>
                    </div>
                </div>

                <div>
                    <button className="mx-2 Button" onClick={() => home()}>Log In</button>
                    <button className="mx-2 Button" onClick={() => SignUp()}>Sign up</button>
                    <div>
                        <label className="ForgotPassword" onClick={() => ForgotPassword()} htmlFor="">Forgot Password?</label>
                    </div>

                </div>
            </div>
        </div>
    )

};

