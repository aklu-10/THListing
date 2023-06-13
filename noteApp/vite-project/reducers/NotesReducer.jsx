function NotesReducer(notes, action)
{
    let copiedNotes = [...notes];

    switch(action.type)
    {
        case 'SAVE':
            return [...notes, action.payload];

        case 'UPDATE':
        copiedNotes.splice(action.payload.index,1);
        copiedNotes.splice(action.payload.index,0,action.payload.newNote);
        return copiedNotes;

        case 'DELETE':
        copiedNotes.splice(action.payload,1);
        return copiedNotes;

        case 'PIN':
        let data = copiedNotes[action.payload];
        copiedNotes.splice(action.payload,1)
        copiedNotes.unshift(data);
        return copiedNotes;

        default: return notes;
    }
}

export default NotesReducer;