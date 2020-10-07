import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import SimpleReactLightbox from 'simple-react-lightbox'

const GalleryApp = () =>{
  return(
      <ThemeProvider>
        <CSSReset/>
          <SimpleReactLightbox>
            <App />
          </SimpleReactLightbox>
      </ThemeProvider>
  )
}
ReactDOM.render(
  <GalleryApp/>,
  document.getElementById('root')
);


