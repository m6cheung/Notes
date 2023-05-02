import { SELECT_NOTE, SAVE_NOTE, DELETE_NOTE, FILTER_NOTE } from '../util/constants';

export const saveNote = (note) => {
  return {
    type: SAVE_NOTE,
    payload: note
  };
};

export const selectNote = (selectedId) => {
  return {
    type: SELECT_NOTE,
    payload: selectedId
  };
};

export const deleteNote = (deleteId) => {
  return {
    type: DELETE_NOTE,
    payload: deleteId
  };
};

export const filterNotes = (keywords) => {
  return {
    type: FILTER_NOTES,
    payload: keywords
  };
};