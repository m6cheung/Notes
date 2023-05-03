import { generateNextId, filterNotes } from "../util";
import { DELETE_NOTE, SAVE_NOTE, SELECT_NOTE, FILTER_NOTES } from "../util/constants";

const initialState = [
  { id: generateNextId(), name: 'First Note', content: 'This is my very first note', selected: true, hidden: false },
  { id: generateNextId(), name: 'Second Note', content: 'This is my second note.', selected: false, hidden: false }
];

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NOTE: {
      const savedNote = action.payload;

      return [
        ...state.notes, { id: generateNextId(), ...savedNote },
      ];
    }
    case DELETE_NOTE: {
      const deleteId = action.payload;
      const newState = [...state];

      let index = null;
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].id === deleteId) {
          index = i;
          break;
        }
      }

      if (index !== null) newState.splice(index, 1);
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
