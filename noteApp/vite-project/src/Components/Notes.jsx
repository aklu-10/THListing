import React, { memo } from 'react'
import { useState } from 'react';
import EditNotes from './EditNotes';
import { Delete } from '@mui/icons-material';
import { toast } from 'react-toastify'
import { motion } from 'framer-motion';

const Notes = ({note, dispatch, index}) => {

    const [showEdit, setShowEdit] = useState(false);
    const [showIcons, setShowIcons] = useState(false);

    function handleNotePreview()
    {
        setShowEdit(true);
    }

    function handleShowIcons()
    {
        setShowIcons(true);
    }

    function handleHideIcons()
    {
        setShowIcons(false);
    }

    function handleDelete()
    {
        dispatch({type:'DELETE', payload:index});
        toast("Note deleted");
    }

  return (
    <>
    
        <motion.div
        whileHover={{ scale: .98 }}
        onMouseEnter={handleShowIcons} onMouseLeave={handleHideIcons} className='notes' onClick={handleNotePreview}
        >
            <p>{note.noteData.length>400 ? note.noteData.slice(0,400) + '...' : note.noteData}</p>
            {
                showIcons ? 
            <button className='delete' onClick={handleDelete}><Delete/></button>
            : null
            }
        </motion.div>


        <p >{showEdit ? <EditNotes dispatch={dispatch} index={index} note={note} setShowEdit={setShowEdit}/> : null }</p>

    </>
  )
}


export default memo(Notes);


