import { createGlobalStyle } from 'styled-components';
import '../imageAssets/back.svg';

export const GlobalStyle = createGlobalStyle
    `
*{
margin:0;
padding:0;
box-sizing:border-box;
}

@-webkit-keyframes bg-scrolling-reverse {
    100% {
      background-position: 50px 50px;
    }
  }
  @-moz-keyframes bg-scrolling-reverse {
    100% {
      background-position: 50px 50px;
    }
  }
  @-o-keyframes bg-scrolling-reverse {
    100% {
      background-position: 50px 50px;
    }
  }
  @keyframes bg-scrolling-reverse {
    100% {
      background-position: 50px 50px;
    }
  }
  @-webkit-keyframes bg-scrolling {
    0% {
      background-position: 50px 50px;
    }
  }
  @-moz-keyframes bg-scrolling {
    0% {
      background-position: 50px 50px;
    }
  }
  @-o-keyframes bg-scrolling {
    0% {
      background-position: 50px 50px;
    }
  }
  @keyframes bg-scrolling {
    0% {
      background-position: 50px 50px;
    }
  }
  body {
    margin-top: 1.5rem;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC") repeat 0 0;
    -webkit-animation: bg-scrolling-reverse .92s infinite;
    -moz-animation: bg-scrolling-reverse .92s infinite;
    -o-animation: bg-scrolling-reverse .92s infinite;
    animation: bg-scrolling-reverse .92s infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -o-animation-timing-function: linear;
    animation-timing-function: linear;
  }
  

#root{
    width:80%;
    margin:0 auto;
    font-family: "monospace";
    color: #7272727;

}
`


export default GlobalStyle;


