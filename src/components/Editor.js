import ReactDOM from 'react-dom';
import React from 'react';

const editor = new EditorJs({ holder: 'editorjs' });

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  console.log('jrllo');
  editor.save().then((data) => {
    console.log(data);
  });
});
