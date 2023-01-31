import { ValidateForm } from "./FormValidator"
import { useShowPassword } from "../CustomHook/useShowPassword"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./SignUp.css"

export default function SignUp() {
    const [formError, setFormError] = useState({})

    const [Information, setInformation] = useState({
        email: '',
        nickname: "",
        birthday: "",
        password: ''
    })

    const navigate = useNavigate()

    const { showPassword, togglePasswordVisibility } = useShowPassword();

    function NavigateToHome() {
        const isValid = ValidateForm(Information,setFormError)
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
                <input className="m-0 mt-3" onChange={handleChange} type={showPassword} name="password" id="password" />
                {formError.password?.map(error => <p className='my-0'>{error}</p>)}
                <div>
                    <input className="w-auto mt-3 mx-2" onClick={() => togglePasswordVisibility()} type="checkbox" id="showPassword" />
                    <label htmlFor="showPassword">Show password</label>
                </div>
                <button className="mx-2 Button" onClick={() => NavigateToHome()}>Log In</button>
            </div>
        </div >
    )
}
