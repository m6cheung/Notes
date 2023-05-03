import { useState } from 'react';
const ListItem = ({ name, id }) => {
  const [text, setText] = useState(name);

  const handleInputChange = (e) => {
    const { value = '' } = e.target;
    setText(value);
  };

  const handleInputBlur = () => {
    // save new name in redux store
  };

  const handleInputClick = (_) => {
    // update selected note in redux store
  };

  const handleButtonClick = () => {
    // delete current note
    // if current note is selected
    // set selected to first note
  };


  return (
    <li className='list-item'>
      <button className='list-item--btn' onClick={handleButtonClick}>Delete</button>

      <input
        className='list-item--name'
        value={text}
        onClick={handleInputClick}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        type='text'
        name='name'
      />
    </li>
  );
};

export default ListItem;