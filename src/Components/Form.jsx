function Form() {
    return (
        <div className="form-container" >
            <form action="" className="form" >
                <label>First Name:</label>
                <input type="text" placeholder="Enter Your Name" />
                <label>Email:</label>
                <input type="text" placeholder="Your Email" />
                <label>Password:</label>
                <input type="password" placeholder="Password" />
                <label>Repeat Password:</label>
                <input type="password" placeholder="Confirm Password " />
                <input type="submit" value="Sign-Up" />
            </form>
        </div>
    )
}

export default Form