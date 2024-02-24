import { useState } from "react"

function Form() {

    const [nameError, setNameError] = useState()
    const [emailError, setEmailError] = useState()
    const [passwordError, setPassError] = useState()
    const [repPassError, setRepPassError] = useState()

    //State to display Submission
    const [isSubmit, setIsSubmit] = useState(false)

    //State for Storing Data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
    })


    //Storing user input in state 
    const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setFormData({ ...formData, [inputName]: inputValue })
    }

    console.log(formData)


    //Validating on Submit 
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        const isValid = validate(formData) //Validating if there are any errors
        setIsSubmit(isValid) //If validate is success then it is Submitted
    }

    const validate = (values) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;  //Regex for Valid Email
        const passwordRegex = /[!@#$%^&*(),.?":{}|<>]/;       //Regex for password
        const { name, email, password, repeatPassword } = values;

        //Declaring Input errors
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
            passwordError = 'Password is Required';
        } else if (password.length < 10) {
            passwordError = 'Password must be at least 10 characters long';
        } else if (!passwordRegex.test(password)) {
            passwordError = 'Password must contain one special character';
        }

        // Validate repeat password
        if (!repeatPassword.trim()) {
            repPassError = 'Confirm Password is Required';
        }
        else if (repeatPassword !== password) {
            repPassError = 'Passwords do not match';
        }

        console.log(nameError, emailError, passwordError, repPassError)

        //Pushing errors into states to displey in webpage
        setNameError(nameError);
        setEmailError(emailError);
        setPassError(passwordError);
        setRepPassError(repPassError);

        //Returning if there are any errors in form back to handleSubmit
        return !(nameError || emailError || passwordError || repPassError);
    };


    return (
        <div className="form-container" >
            <form action="" className="form" onSubmit={handleSubmit}
            >
                <h1>Create Account</h1>
                <hr />
                {isSubmit ? (<input className="submitted" value={"Submitted Succesfully"} />) : ""} {/*Displaying Submission after validation becomes true*/}

                <label>First Name:</label>

                <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                {nameError ? (<span>{nameError}</span>) : ""} {/*Displaying Name Error*/}

                <label>Email:</label>

                <input
                    type="text"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                {emailError ? (<span>{emailError}</span>) : ""} {/*Displaying Email Error*/}

                <label>Password:</label>

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {passwordError ? (<span>{passwordError}</span>) : ""} {/*Displaying Password Error*/}

                <label>Confirm Password:</label>

                <input
                    type="password"
                    placeholder="Repeat Password "
                    name="repeatPassword"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                />
                {repPassError ? (<span>{repPassError}</span>) : ""} {/*Displaying repeat Password Error*/}

                <input type="submit" className="confirm-signup" value="Sign-Up" />
            </form>
        </div>
    )
}

export default Form