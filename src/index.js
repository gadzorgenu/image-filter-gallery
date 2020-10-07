import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

const GalleryApp = () =>{
  return(
    <React.StrictMode>
    <ThemeProvider>
      <CSSReset/>
        <App />
    </ThemeProvider>
  </React.StrictMode>
  )
}
ReactDOM.render(
  <GalleryApp/>,
  document.getElementById('root')
);


