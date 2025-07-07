import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer, useState } from 'react'
import { date } from 'yup';
import { reducer } from './reducer';

// books, modalText, isModalOpen
// add book - modalText
// removed book - modalText


const booksData = [
    {id: 1, name: "The Read Bangladesh"},
    {id: 2, name: "JavaScript Books"},
    {id: 3, name: "Quran"},
];

const Modal = ({modalText})=>{
   return <p>{modalText}</p>
}


const initialState = { 
        books: booksData,
        isModalOpen: false,
        modalText: ""
    }

function UseReducer() {
  
    const [bookState, dispatch] = useReducer(reducer, initialState)
    const [bookName, setBookName] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newBook = {id: new Date().getTime().toString(), name: bookName};
        dispatch({type: "ADD", payload: newBook})
        setBookName("")
    }

    const removeBook = (id)=>{
        dispatch({type: "REMOVE", playload: id})
    }

  return (
    <div>
        <h3>Book List</h3>
        <form onSubmit={handleSubmit}>
            <input type='text' value={bookName} 
            onChange={(e)=>{
                setBookName(e.target.value);
            }}/>
            <button type='submit'>Add Book</button>
        </form>

        {bookState.isModalOpen && <Modal modalText={bookState.modalText}/>}
        
        {bookState.books.map((book)=>{
            const {id, name}= book;
            return (
                <li key={id}>
                {name} <button onClick={()=>{removeBook(id)}}>X</button>

            </li>
            )
        })}
    </div>
  )
}

export default UseReducer