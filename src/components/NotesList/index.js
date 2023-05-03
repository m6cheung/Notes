import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNotes } from '../../reducers/notesSlice';
import { addNote, deleteNote, saveNoteName, selectNote } from '../../actions/notes';
import ListItem from './ListItem';
import './styles.css';


const NotesList = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const notes = useSelector(selectNotes);
  const { allNotes = {} } = notes;

  const handleAddNote = (_) => {
    dispatch(addNote());
  };

  const handleSearchTextChange = (e) => {
    const { value } = e.target;
    setSearchText(value);

  };

  const handleSearch = (_) => {
    // dispatch serach action with search text;
  };

  const onDelete = (id, selected) => {
    dispatch(deleteNote(id));
    if (selected) {
      dispatch(selectNote(null));
    }
  };

  const onListItemBlur = (id, name) => {
    dispatch(saveNoteName(id, name));
  };

  const onNoteSelect = (id) => {
    dispatch(selectNote(id));
  };

  return (
    <>
      <ul className='notes-list'>
        <div className='search-wrapper'>
          <input
            type="text"
            name='notes-search'
            value={searchText}
            onChange={handleSearchTextChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {Object.keys(allNotes).map(id => {
          return (
            <ListItem
              key={id}
              name={allNotes[id].name}
              selected={notes.selected === id}
              onDelete={(_) => onDelete(id, notes.selected === id)}
              onListItemBlur={(updatedName) => onListItemBlur(id, updatedName)}
              onNoteSelect={(_) => onNoteSelect(id)}

              id={id}
              savedContent={allNotes[id].content}
            />
          );
        })}

        <button className='notes-list--add' onClick={handleAddNote}>Add Note</button>
      </ul>
    </>
  );

};

export default NotesList;