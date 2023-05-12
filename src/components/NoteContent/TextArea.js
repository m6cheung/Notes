import { useState, useEffect } from 'react';

const TextArea = ({
  content = '',
  onTextAreaBlur = () => { }
}) => {
  const [text, setText] = useState(content);
  const [textWithHyperLink, setTextWithHyperLink] = useState('');

  useEffect(() => {
    const split = text.split(' ');
    for (let i = 0; i < split.length; i++) {
      split[i] = split[i].replace(/[A-Z]{3}-\d*/g, `<a href=''>${split[i]}</a>`);
    };

    const newText = split.join(' ');
    if (newText.length) {
      setTextWithHyperLink(newText);
    }
  }, [text]);

  return (
    <div
      className='note-content-text'
      onBlur={(e) => {
        setText(e.currentTarget.textContent);
        onTextAreaBlur(text);
      }}
      contentEditable
      dangerouslySetInnerHTML={{ __html: textWithHyperLink.length ? textWithHyperLink : text }}
    />
  );
};

export default TextArea;