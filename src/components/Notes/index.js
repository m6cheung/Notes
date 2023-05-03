import NotesList from '../NotesList';
import NotesContent from '../NoteContent';
import './styles.css';

const Notes = () => {
  return (
    <div className="notes">
      <NotesList />
      <NotesContent />
    </div>
  );
};

export default Notes;
