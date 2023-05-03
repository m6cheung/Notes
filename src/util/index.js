export const generateNextId = (() => {
  let maxId = 0;
  return () => {
    return maxId++;
  };
})();

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