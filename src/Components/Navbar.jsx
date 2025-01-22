import { Link } from "react-router-dom"

function Navbar({ inputValue, setInputValue }) {


    //Exporting the inputValue through props
    const handleSearch = (e) => {
        setInputValue(e.target.value.toLowerCase())
    }

    return (
        <header>
            <Link to='/'> {/*Changing location to Books Page*/}
                <div className="heading">
                    <h1>Book Finder</h1>
                </div>
            </Link>

            <div id='search-div' > {/*Input to take the searched book*/}
                <input id='search-box' type="text" onChange={(e) => handleSearch(e)} placeholder='Search Books' />
            </div>

            <Link to='/Form'> {/*Changin the component to Form page onclick*/}
                <div>
                    <button id='register-btn'>Register</button>
                </div>
            </Link>
        </header>
    )
}

export default Navbar