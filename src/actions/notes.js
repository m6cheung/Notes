import {
  SELECT_NOTE,
  SAVE_NOTE_CONTENT,
  SAVE_NOTE_NAME,
  DELETE_NOTE,
  FILTER_NOTES,
  ADD_NOTE
} from '../util/constants';

export const addNote = () => {
  return {
    type: ADD_NOTE
  };
};

export const saveNoteContent = (id, content) => {
  return {
    type: SAVE_NOTE_CONTENT,
    payload: {
      id,
      content
    }
  };
};

export const saveNoteName = (id, name) => {
  return {
    type: SAVE_NOTE_NAME,
    payload: {
      id,
      name
    }
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