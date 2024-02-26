import { useEffect, useState } from 'react'

function Books(props) {
    const [data, setData] = useState([])
    const [filteredBooks, setFilteredBooks] = useState()


    //Fetching Data from the API
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


    //Calling function as soon as input changed
    useEffect(() => {
        handleFilterData();
    }, [props.inputValue]);


    //Filtering data 
    const handleFilterData = () => {
        const inputValue = props.inputValue; // Convert input value to lowercase for case-insensitive comparison
        const filteredData = data.filter((book) => {
            return book.title.toLowerCase().includes(inputValue);
        });
        setFilteredBooks(filteredData);
    };


    // Redirecting to the particular book link
    const handleClick = (previewLink) => {
        window.open(previewLink, "_blank");
    };


    return (
        <div id='all-books-container' >

            {filteredBooks?.length === 0 ? (<h2>Sorry, No Results Found!</h2>) : ""}
            {filteredBooks?.map((element, index) => {

                let imageLink = element.imageLinks.smallThumbnail;
                let title = element.title;
                let bookLink = element.previewLink;
                let author = element.authors[0];
                let ratings = element.averageRating;

                return (
                    <div className='book-container' onClick={() => handleClick(bookLink)} key={index}>
                        <img className='book-image' src={imageLink} alt="" />
                        <h3 className='title'>{title}</h3>
                        <h4 className='authors' >{author}</h4>
                        <div className='ratings' >
                            <p>Ratings: {ratings ? ratings : "4"}
                                <span className='stars'>★</span></p>
                            <span className='free-tag' >Free</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Books