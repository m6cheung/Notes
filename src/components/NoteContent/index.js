import { useSelector } from 'react-redux';
import { selectNotes } from '../../reducers/notesSlice';
import './styles.css';

const NoteContent = () => {
  const notes = useSelector(selectNotes);

  return (
    <div className='note-content-wrapper'>
      {notes.map(note => {
        return (
          note.selected &&
          <textarea className='note-content-text' rows="15" cols="50" key={note.id} >
            {note.content}
          </textarea>
        );
      })}
    </div >
  );
};

export default NoteContent;