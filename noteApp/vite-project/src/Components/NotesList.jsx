import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import './css/NotesList.css';
import AddNotes from './AddNotes';
import { useState } from 'react';
import Notes from './Notes';
import { motion } from 'framer-motion';

const NotesList = ({notes, dispatch}) => {

    const [showAddNote, setShowAddNote] = useState(false);

  return (
    <div className='notesList'>
    
        <div className='notesContainer'>
            {

                notes.length ?

                notes.map(((note, index)=>(
                    <Notes key={index} index={index} note={note} dispatch={dispatch} />
                )))

                : <p className='notesNone'>Add a note by tapping on '+' sign</p>
            }
        </div>

    {
        showAddNote ? <AddNotes showAddNote={showAddNote} setShowAddNote={setShowAddNote} dispatch={dispatch}/> :
        <div className='addContainer'>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{scale:1.15}}
          className='add'
          onClick={()=>setShowAddNote(true)}
        >
            <AddIcon/>
        </motion.button>


        </div>

    }
    </div>
  )
}

export default NotesList