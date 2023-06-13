import React, { useEffect } from 'react'
import { useState } from 'react';
import './css/AddNotes.css';
import { memo } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const AddNotes = ({showAddNote, setShowAddNote, dispatch ,note}) => {
    
    const [title, setTitle] = useState(note?note.title:'');
    const [noteData, setNoteData] = useState(note?note.noteData:'');
    const [timespan, setTimeSpan] = useState('');

    function calculateTimeSpan()
    {
        let time = new Date().toLocaleTimeString('en-US');
        let date = new Date().toLocaleDateString();
        setTimeSpan(date+' at '+time);
    }

    function handleSave()
    {
        let note = {
            title,
            noteData,
            timespan,
            pin:false
        }

        if(title || noteData)
        {
            dispatch({type:'SAVE', payload:note});
            setTitle('');
            setNoteData('');
            setShowAddNote(false);
            toast("Note added");
        }
        else
        {
            setShowAddNote(false);
            toast("Empty note discarded.");
        }

    }

    useEffect(()=>
    {
        calculateTimeSpan();
    },[]);

    return (
        
        <div className='addNotesFormContainer'>
            <div className='addNotesForm'>
                <input onChange={(e)=>setTitle(e.target.value)} type='text' placeholder='Title' name='title'/>
                <textarea onChange={(e)=>setNoteData(e.target.value)} placeholder='Note here' name='noteData'/>
                <p className='timespan'>Edited on {timespan}</p>
                <div className='btnGroup'>
                    
                    <motion.button onClick={handleSave} whileHover={{ scale: .88 }}>
                        Save
                    </motion.button>

                    <motion.button onClick={()=> {showAddNote ? setShowAddNote(false) : setShowAddNote(true), toast("Note discarded.")}} whileHover={{ scale: .88 }}>
                        Discard
                    </motion.button>

                </div>
            </div>
        </div>
    )
}

export default memo(AddNotes);