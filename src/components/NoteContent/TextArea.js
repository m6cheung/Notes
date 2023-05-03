import { useState } from 'react';

const TextArea = ({
  content = '',
  onTextAreaBlur = () => { }
}) => {
  const [text, setText] = useState(content);

  const handleChange = (e) => {
    const { value = '' } = e.target;
    setText(value);
  };

  return (
    <textarea
      className='note-content-text'
      value={text}
      onChange={handleChange}
      onBlur={(_) => onTextAreaBlur(text)}
      rows="15"
      cols="40"
    />
  );
};

export default TextArea;