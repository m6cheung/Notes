import { generateNextId, filterNotes } from "../util";
import { DELETE_NOTE, SAVE_NOTE, SELECT_NOTE, FILTER_NOTES } from "../util/constants";

const initialState = {
  notes: {
    0: { title: 'First Note', content: 'This is my very first note', selected: true, hidden: false },
    1: { title: 'Second Note', content: 'This is my second note.', selected: false, hidden: false }
  },
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NOTE: {
      const id = generateNextId();
      const savedNote = action.payload;

      return {
        notes: { ...state.notes, [id]: { ...savedNote } },
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