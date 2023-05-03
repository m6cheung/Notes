import { useState } from 'react';
const ListItem = ({ name, id }) => {
  const [canSave, setCanSave] = useState(false);

  const handleInputChange = () => {

  };

  const handleInputBlur = () => {

  };

  const handleInputClick = (_) => {


  };

  const handleButtonClick = () => {

  };


  return (
    <li className='list-item'>
      <button className='list-item--btn' onClick={handleButtonClick}>Delete</button>

      <input
        className='list-item--name'
        value={name}
        onClick={handleInputClick}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        type='text'
      />
    </li>
  );
};

export default ListItem;