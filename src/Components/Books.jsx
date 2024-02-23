import { useEffect, useState } from 'react'

function Books() {

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
        <div id='all-books-container' >
            {filteredBooks?.map((element, index) =>
            (
                <div className='book-container' onClick={() => handleClick(element.previewLink)} key={index}>
                    <img className='book-image' src={element.imageLinks.smallThumbnail} alt="" />
                    <h3 className='title'>{element.title}</h3>
                    <h4 className='authors' >{element.authors[0]}</h4>
                </div>
            )
            )}
        </div>
    )
}

export default Books