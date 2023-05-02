import { useState } from 'react';
import NotesList from '../NotesList';
import Content from '../NoteContent';
import './styles.css';

const Notes = () => {
  return (
    <div className="notes">
      <NotesList />
      <Content />
    </div>
  );
};

export default Notes;
