import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNotes } from '../../reducers/notesSlice';
import {
  addNote,
  deleteNote,
  saveNoteName,
  selectNote,
  filterNotes
} from '../../actions/notes';
import ListItem from './ListItem';
import './styles.css';


const NotesList = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const notes = useSelector(selectNotes);

  const handleAddNote = (_) => {
    dispatch(addNote());
    if (searchText.length) {
      dispatch(filterNotes(''));
      setSearchText('');
    }
  };

  const handleSearchTextChange = (e) => {
    const { value } = e.target;
    setSearchText(value);

    if (!value || !value.length) {
      dispatch(filterNotes(value));
    }

  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(filterNotes(searchText));
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


  const { allNotes = {}, filtered = {}, selected = '' } = notes;
  return (
    <>
      <ul className='notes-list'>
        <form className='search-wrapper'>
          <input
            type="text"
            name='notes-search'
            autoComplete='off'
            value={searchText}
            placeholder={"Start Search"}
            onChange={handleSearchTextChange}
          />
          <button onClick={handleSearch}>Search</button>
        </form>

        <button className='notes-list--add' onClick={handleAddNote}>Add Note</button>

        {Object.keys(allNotes).map(id => {
          return !filtered[id] ?
            <ListItem
              key={id}
              name={allNotes[id].name}
              selected={selected === id}
              onDelete={(_) => onDelete(id, selected === id)}
              onListItemBlur={(updatedName) => onListItemBlur(id, updatedName)}
              onNoteSelect={(_) => onNoteSelect(id)}
              id={id}
              savedContent={allNotes[id].content}
            /> : null;
        })}
      </ul>
    </>
  );

};

export default NotesList;