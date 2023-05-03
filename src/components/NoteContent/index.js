import { useSelector, useDispatch } from 'react-redux';
import { selectNotes } from '../../reducers/notesSlice';
import { saveNoteContent } from '../../actions/notes';
import TextArea from './TextArea';
import './styles.css';


const NoteContent = () => {
  const dispatch = useDispatch();
  const notes = useSelector(selectNotes);
  const { allNotes = {} } = notes;

  const onTextAreaBlur = (id, content) => {
    dispatch(saveNoteContent(id, content));
  };

  return (
    <div className='note-content-wrapper'>
      {Object.keys(allNotes).map(id => {
        return (
          notes.selected === id &&
          <TextArea
            key={id}
            content={allNotes[id].content}
            onTextAreaBlur={(updatedContent) => onTextAreaBlur(id, updatedContent)}
          />
        );
      })}
    </div >
  );
};

export default NoteContent;