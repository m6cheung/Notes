import { useSelector } from 'react-redux';
import { selectNotes } from '../../reducers/notesSlice';
import ListItem from './ListItem';
import './styles.css';

const NotesList = () => {
  const notes = useSelector(selectNotes);

  const handleAddNote = (e) => {
    //Add new note with default name and empty content
  };

  return (
    <>
      <ul className='notes-list'>
        {Object.keys(notes).map(id => {
          return <ListItem key={id} name={notes[id].name} id={id} />;
        })}
        <button onClick={handleAddNote}>Add Note</button>
      </ul>
    </>
  );

};

export default NotesList;