import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectNotes } from '../../reducers/notesSlice';
import TextArea from './TextArea';
import './styles.css';

const NoteContent = () => {
  const notes = useSelector(selectNotes);

  return (
    <div className='note-content-wrapper'>
      {Object.keys(notes).map(id => {
        return (
          notes[id].selected &&
          <TextArea key={id} content={notes[id].content} />
        );
      })}
    </div >
  );
};

export default NoteContent;