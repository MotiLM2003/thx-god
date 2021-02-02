import React from 'react';
import '../App.css';

import EditorJs from '@editorjs/editorjs';

const isEnglish = (text) => {
  const paragraph = text;
  const reg = '^[a-zA-Z0-9 ,;./!,]*$';
  const found = paragraph.match(reg);
  console.log('found', found);
  return found;
};

const App = () => {
  const defaultblocks = [];
  for (let i = 0; i <= 30; i++) {
    const temp = {
      type: 'paragraph',
      data: {
        text: '',
      },
    };

    defaultblocks.push(temp);
  }
  const editor = new EditorJs({
    holder: 'editorjs',
    autofocus: true,
    tools: SimpleImage,
    data: {
      time: 1556098174501,
      blocks: defaultblocks,
      version: '2.12.4',
    },
  });
  const click = () => {
    editor.clear();
    // editor.save().then((data) => console.log(data));
  };
  const keydown = () => {
    console.log('key down');
    const htmlblock = document.querySelectorAll('.ce-paragraph');
    htmlblock.forEach((block) => {
      const text = block.innerHTML;

      // console.log(text);
      if (!isEnglish(text)) {
        block.style.textAlign = 'right';
      }
    });
  };
  return (
    <div>
      <div className='container'>
        <div className='content' id='editorjs' onKeyUp={keydown}></div>
        <div className='footer'>
          <button id='btn' onClick={click}>
            save
          </button>
        </div>
      </div>
    </div>
  );
};

class SimpleImage {
  static get toolbox() {
    return {
      title: 'Image',
      icon:
        '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
    };
  }

  render() {
    return document.createElement('input');
  }

  save(blockContent) {
    return {
      url: blockContent.value,
    };
  }
}

export default App;
