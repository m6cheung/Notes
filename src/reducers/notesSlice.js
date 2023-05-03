import { filterNotes } from "../util";
import { v4 as uuid } from 'uuid';
import {
  DELETE_NOTE,
  SAVE_NOTE,
  SELECT_NOTE,
  FILTER_NOTES,
  ADD_NOTE
} from "../util/constants";

const initialState = {
  [uuid()]: { name: 'First Note', content: 'This is my very first note', selected: true, hidden: false },
  [uuid()]: { name: 'Second Note', content: 'This is my second note.', selected: false, hidden: false }
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      return {
        ...state.notes,
        [uuid()]: { name: 'Unnamed note', content: '', selected: false, hidden: false }
      };
    }
    case SAVE_NOTE: {
      const savedNote = action.payload;

      return {
        ...state.notes,
        ...savedNote,
      };
    }
    case DELETE_NOTE: {
      const deleteId = action.payload;
      const newState = { ...state };

      delete newState[deleteId];
      return newState;
    }
    case SELECT_NOTE: {
      const selectedId = action.payload;
      const newState = { ...state };

      newState[selectedId].selected = true;
      return newState;
    }
    case FILTER_NOTES: {
      const keywords = action.payload;
      const filteredNotes = filterNotes({ ...state }, keywords);
      return filteredNotes;
    }
    default:
      return state;
  }
};

export const selectNotes = state => state.notes;
