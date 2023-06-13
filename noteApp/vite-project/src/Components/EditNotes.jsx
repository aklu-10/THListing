import React from 'react'
import { useState } from 'react';
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { Delete } from '@mui/icons-material';
import { toast } from 'react-toastify'
import { memo } from 'react';

const EditNotes = ({note, setShowEdit, dispatch, index}) => {

    const [title, setTitle] = useState(note.title);
    const [noteData, setNoteData] = useState(note.noteData);
    const [timespan, setTimeSpan] = useState(note.timespan);
    const [pin, setPin] = useState(note.pinned);

    function calculateTimeSpan()
    {
        let time = new Date().toLocaleTimeString('en-US');
        let date = new Date().toLocaleDateString();
        setTimeSpan(date+' at '+time);
        return date + ' at ' + time;
    }

    function handleSave()
    {
        let newTimeSpan=note.timespan;
        if(title!=note.title || noteData!=note.noteData){
            newTimeSpan = calculateTimeSpan();
        }  

        let newNote = {
            title,
            noteData,
            timespan: newTimeSpan,
            pinned:pin
        }

        dispatch({type:'UPDATE', payload:{index, newNote}});
        setShowEdit(false);
        toast("Changes saved");

        if(pin)
        {
            dispatch({type:'PIN', payload:index});
            toast("Note pinned");
        }

    }

    function handlePin()
    {
        pin ? setPin(false) : setPin(true);
    }

    return (
        
        <div className='addNotesFormContainer'>
            <div className='addNotesForm'>
                <input onChange={(e)=>setTitle(e.target.value)} type='text' placeholder='Title' value={title} name='title'/>
                <textarea onChange={(e)=>setNoteData(e.target.value)} placeholder='Note here' value={noteData} name='noteData'/>
                <p className='timespan'>Edited on {timespan}</p>
                <div className='btnGroup'>
                    <button onClick={handleSave}>Save changes</button>  
                    <button onClick={()=>{setShowEdit(false),toast("Changes not saved.")}}>Close</button>  
                </div>
                <button className='pin' onClick={handlePin}>{pin ? <PushPinIcon/> : <PushPinOutlinedIcon/> }</button>
                <button className='delete' onClick={()=>{dispatch({type:'DELETE', payload:index}),toast("Note deleted.")}}><Delete/></button>
            </div>
        </div>
    )
}

export default memo(EditNotes);