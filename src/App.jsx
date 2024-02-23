import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState()
  // const [searchedBook, setSearchedBook] = useState()
  // const [filteredBooks, setFilteredBooks] = useState()

  useEffect(() => {
    fetch("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })

      .then(response => {
        return response.json();
      })

      .then(result => {
        setData(result.books)
      })

      .catch(error => {
        console.log(error)
      })

  }, [])
  console.log(data)

  const handleClick = (previewLink) => {
    window.open(previewLink, "_blank");
  };

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
        <div>
          <h1>Kalvium Books </h1>
        </div>
        <div id='search-div' >
          <input id='search-box' type="text" placeholder='Search Books' />
        </div>
        <div>
          <button id='register-btn' >REGISTER</button>
        </div>
      </header>

      <main>
        <div id='all-books-container' >
          {data?.map((element, index) =>
          (
            <div className='book-container' onClick={() => handleClick(element.previewLink)} key={index}>
              <img className='book-image' src={element.imageLinks.smallThumbnail} alt="" />
              <h3 className='title'>{element.title}</h3>
              <h4 className='authors' >{element.authors[0]}</h4>
            </div>
          )
          )}
        </div>
      </main>
    </div>
  )
}

export default App
