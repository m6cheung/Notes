export const generateNextId = (notes) => {
  let maxId = 0;

  notes.forEach(note => {
    maxId = Math.max(note.id, maxId);
  });

  return maxId + 1;
};

export const filterNotes = (notes, keywords) => {
  if (!keywords.length) {
    for (const id in notes) {
      notes[id].hidden = false;
    }

    return notes;
  }
  const filteredNotes = {};

  for (const id in notes) {

  }

  return filteredNotes;

};