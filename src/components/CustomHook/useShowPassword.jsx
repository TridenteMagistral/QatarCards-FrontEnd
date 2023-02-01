import { useState } from "react"

export function useShowPassword() {

    const [showPassword, setShowPassword] = useState("password")

    function togglePasswordVisibility() {
        if (showPassword === "password") {
            setShowPassword("text")
        } else
            setShowPassword("password")
    }

    return { showPassword, togglePasswordVisibility };
}