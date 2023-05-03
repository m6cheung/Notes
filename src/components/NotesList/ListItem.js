import { useState } from 'react';
import './styles.css';

const ListItem = ({
  name = '',
  onDelete = () => { },
  onListItemBlur = () => { },
  onNoteSelect = () => { },
  selected = false,
}) => {
  const [text, setText] = useState(name);

  const handleInputChange = (e) => {
    const { value = '' } = e.target;
    setText(value);
  };


  return (
    <li className={
      [
        'list-item',
        selected && 'list-item--selected'
      ]
        .filter(Boolean)
        .join(' ')
    }>
      <button className='list-item--btn' onClick={onDelete}>Delete</button>

      <input
        className='list-item--name'
        value={text}
        onClick={onNoteSelect}
        onBlur={(_) => onListItemBlur(text)}
        onChange={handleInputChange}
        type='text'
        name='name'
      />
    </li>
  );
};

export default ListItem;