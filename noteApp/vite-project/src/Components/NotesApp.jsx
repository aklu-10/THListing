import React from 'react'
import NotesList from './NotesList'
import NotesReducer from '../../reducers/NotesReducer'
import { useReducer } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const NotesApp = () => {

    const [notes, dispatch] = useReducer(NotesReducer, []);

  return (
    <>
        <NotesList notes={notes} dispatch={dispatch}/>
        <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
   </>
  )
}

export default NotesApp