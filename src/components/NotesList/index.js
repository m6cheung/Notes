import { useSelector } from 'react-redux';
import { selectNotes } from '../../reducers/notesSlice';
import ListItem from './ListItem';
import './styles.css';

const NotesList = () => {
  const notes = useSelector(selectNotes);

  const handleAddNote = (e) => {

  };

  return (
    <>
      <ul className='notes-list'>
        {notes.map(note => {
          return <ListItem key={note.id} name={note.name} id={note.id} />;
        })}
        <button onClick={handleAddNote}>Add Note</button>
      </ul>
    </>
  );

};

export default NotesList;