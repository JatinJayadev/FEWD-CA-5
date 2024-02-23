import './App.css'
// import Books from './Components/Books'
// import Books from './Components/Books'
import Form from './Components/Form'
import { Route, Routes, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {

  const [data, setData] = useState()
  // const [searchedBook, setSearchedBook] = useState()
  const [filteredBooks, setFilteredBooks] = useState()



  useEffect(() => {
    fetch("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })

      .then(response => {
        return response.json();
      })

      .then(result => {
        setData(result.books)
        setFilteredBooks(result.books)
      })

      .catch(error => {
        console.log(error)
      })

  }, [])
  console.log(data)

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    // if (inputValue === "") {

    const filteredData = data.filter((i) => {
      return i.title.toLowerCase().includes(inputValue.toLowerCase())
    })
    setFilteredBooks(filteredData)
    console.log(e.target.value)
  };

  const handleClick = (previewLink) => {
    window.open(previewLink, "_blank");
  };


  return (
    <div>
      <header>
        {/* <Link to='/'> */}
        <div>
          <h1>Kalvium Books </h1>
        </div>
        {/* </Link> */}
        <div id='search-div' >
          <input id='search-box' type="text" onChange={(e) => handleSearch(e)} placeholder='Search Books' />
        </div>
        <Link to='/Form'>
          <div>
            <button id='register-btn'>REGISTER</button>
          </div>
        </Link>
      </header>

      <main>
        {/* <div id='all-books-container' >
          {filteredBooks?.map((element, index) =>
          (
            <div className='book-container' onClick={() => handleClick(element.previewLink)} key={index}>
              <img className='book-image' src={element.imageLinks.smallThumbnail} alt="" />
              <h3 className='title'>{element.title}</h3>
              <h4 className='authors' >{element.authors[0]}</h4>
            </div>
          )
          )}
        </div> */}
        <Routes>
          {/* <Route path='/' element={<Books />}  ></Route> */}
          <Route path='/Form' element={<Form />}  ></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
