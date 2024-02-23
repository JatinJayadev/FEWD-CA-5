import './App.css'
import Books from './Components/Books'
// import Books from './Components/Books'
import Form from './Components/Form'
import { Route, Routes, Link } from 'react-router-dom'

function App() {



  // const handleSearch = (e) => {
  //   if (e.target.value == "") {
  //     return data
  //   }
  //   let inputValue = e.target.value.toLowerCase()

  //   const filteredBooks = data.filter((book) => {
  //     return book.title.toLowerCase().includes(inputValue)
  //   })

  //   setFilteredBooks(filteredBooks)
  //   console.log(inputValue)
  // }

  return (
    <div>
      <header>
        <Link to='/'>
          <div>
            <h1>Kalvium Books </h1>
          </div>
        </Link>
        <div id='search-div' >
          <input id='search-box' type="text" placeholder='Search Books' />
        </div>
        <Link to='/Form'>
          <div>
            <button id='register-btn' >REGISTER</button>
          </div>
        </Link>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Books />}  ></Route>
          <Route path='/Form' element={<Form />}  ></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
