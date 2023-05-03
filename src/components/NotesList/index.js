import { useState, useSelector } from 'react';
import ListItem from './ListItem';

const NotesList = () => {
  return (
    <ul className='notes-list'>
      <ListItem />
    </ul>
  );

};

export default NotesList;