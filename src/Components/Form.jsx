import { useState } from "react"

function Form() {

    const [nameError, setNameError] = useState()
    const [emailError, setEmailError] = useState()
    const [passwordError, setPassError] = useState()
    const [repPassError, setRepPassError] = useState()
    const [isSubmit, setIsSubmit] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
    })

    const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setFormData({ ...formData, [inputName]: inputValue })
    }

    console.log(formData)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        const isValid = validate(formData)
        setIsSubmit(isValid)
    }

    // const validate = (values) => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //     const passwordRegex = /[!@#$%^&*(),.?":{}|<>]/;
    //     const { name, email, password, repeatPassword } = values;

    //     if (!name) {
    //         setNameError("Username is required")
    //     }

    //     if (!email) {
    //         setEmailError("Email is required")
    //     } else if (!emailRegex.test(email)) {
    //         setEmailError("Invalid Email Format")
    //     }

    //     if (!password) {
    //         setpassError("Password Required")
    //     } else if (password.length < 4 || password.length > 10) {
    //         setpassError("Password must be less than 10 characters or greater than 4")
    //     } else if (!passwordRegex.test(password)) {
    //         setpassError("Password must contain one special character")
    //     }

    //     if (repeatPassword !== password) {
    //         setRepPassError("Password do not match")
    //     } else if (!repeatPassword) {
    //         setRepPassError("Password is Required")
    //     }
    //     console.log(nameError, emailError, passwordError, repPassError)
    // }
    const validate = (values) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const passwordRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const { name, email, password, repeatPassword } = values;

        let nameError = '';
        let emailError = '';
        let passwordError = '';
        let repPassError = '';

        // Validate name
        if (!name.trim()) {
            nameError = 'Name is required';
        } else if (name.trim().length < 3 || name.trim().length > 30) {
            nameError = 'Name should be between 3 and 30 characters long';
        }

        // Validate email
        if (!email.trim()) {
            emailError = 'Email is required';
        } else if (!emailRegex.test(email)) {
            emailError = 'Invalid Email Format';
        }

        // Validate password
        if (!password.trim()) {
            passwordError = 'Password Required';
        } else if (password.length < 10) {
            passwordError = 'Password must be at least 10 characters long';
        } else if (!passwordRegex.test(password)) {
            passwordError = 'Password must contain one special character';
        }

        // Validate repeat password
        if (passwordError) {
            repPassError = 'Passwords do not match';
        } else if (!repeatPassword.trim()) {
            repPassError = 'Password is Required';
        }

        console.log(nameError, emailError, passwordError, repPassError)


        setNameError(nameError);
        setEmailError(emailError);
        setPassError(passwordError);
        setRepPassError(repPassError);

        return !(nameError || emailError || passwordError || repPassError);
    };


    return (
        <div className="form-container" >
            <form action="" className="form" onSubmit={handleSubmit}
            >
                {isSubmit ? (<input className="submitted" value={"Submitted Succesfully"} />) : ""}
                <label>First Name:</label>

                <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {nameError ? (<span>{nameError}</span>) : ""}
                <label>Email:</label>

                <input
                    type="text"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {emailError ? (<span>{emailError}</span>) : ""}

                <label>Password:</label>

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {passwordError ? (<span>{passwordError}</span>) : ""}

                <label>Repeat Password:</label>

                <input
                    type="password"
                    placeholder="Confirm Password "
                    name="repeatPassword"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                />
                {repPassError ? (<span>{repPassError}</span>) : ""}

                <input type="submit" value="Sign-Up" />
            </form>
        </div>
    )
}

export default Form