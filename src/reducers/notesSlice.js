import { v4 as uuid } from 'uuid';
import {
  DELETE_NOTE,
  SAVE_NOTE_CONTENT,
  SAVE_NOTE_NAME,
  SELECT_NOTE,
  FILTER_NOTES,
  ADD_NOTE
} from "../util/constants";
import { getFilteredNotes } from "../util";

let id1 = uuid();
let id2 = uuid();
const initialState = {
  allNotes: {
    [id1]: { name: 'First Note', content: 'This is my first note' },
    [id2]: { name: 'Second Note', content: 'This is my second note.' },
  },
  filtered: {},
  selected: id1,
};

export const notesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_NOTE: {
      return {
        ...state,
        allNotes: {
          ...state.allNotes,
          [uuid()]: { name: 'Unnamed note', content: '' }
        },
      };
    }

    case SAVE_NOTE_CONTENT: {
      const { id, content } = action.payload;

      return {
        ...state,
        allNotes: {
          ...state.allNotes,
          [id]: {
            ...state.allNotes[id],
            content
          }
        },
      };
    }

    case SAVE_NOTE_NAME: {
      const { id, name } = action.payload;

      return {
        ...state,
        allNotes: {
          ...state.allNotes,
          [id]: {
            ...state.allNotes[id],
            name
          }
        },
      };
    }

    case DELETE_NOTE: {
      const deleteId = action.payload;
      const allNotes = { ...state.allNotes };
      const filtered = { ...state.filtered };

      delete allNotes[deleteId];
      if (filtered[deleteId]) {
        delete filtered[deleteId];
      }
      return { ...state, allNotes, filtered };
    }

    // Select logic can be refactored into a new action creator to decouple.
    case SELECT_NOTE: {
      const selectedId = action.payload;
      const newState = { ...state };

      newState.selected = selectedId;
      return {
        ...newState
      };
    }

    case FILTER_NOTES: {
      const keywords = action.payload;
      const filteredNotes = getFilteredNotes({ ...state.allNotes }, keywords);
      return { ...state, filtered: filteredNotes, selected: null };
    }

    default:
      return state;
  }
};

export const selectNotes = state => state.notes;
