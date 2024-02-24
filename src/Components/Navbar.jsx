import { Link } from "react-router-dom"

function Navbar({ inputValue, setInputValue }) {
    const handleSearch = (e) => {
        setInputValue(e.target.value.toLowerCase())
    }
    return (
        <header>
            <Link to='/'>
                <div>
                    <h1>Kalvium Books </h1>
                </div>
            </Link>
            <div id='search-div' >
                <input id='search-box' type="text" onChange={(e) => handleSearch(e)} placeholder='Search Books' />
            </div>
            <Link to='/Form'>
                <div>
                    <button id='register-btn'>Register</button>
                </div>
            </Link>
        </header>
    )
}

export default Navbar