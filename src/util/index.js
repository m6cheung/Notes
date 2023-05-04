export const getFilteredNotes = (allNotes, keywords) => {
  if (!keywords || !keywords.length) {
    return {};
  }

  const set = new Set(keywords.split(' ').map(keyword => keyword.toLowerCase()));
  const filteredNotes = {};

  allNotesLoop: for (const id in allNotes) {
    const name = allNotes[id].name.split(' ');
    for (let word of name) {
      if (set.has(word.toLowerCase())) continue allNotesLoop;
    }

    filteredNotes[id] = true;
  }

  return filteredNotes;
};