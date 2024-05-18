import React from 'react';
import ReactDOM from 'react-dom/client'
import  App from './App';



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App title='ESTO ES UN TITULO' subTitle='esto es un subtitulo' number={4}/>
    </React.StrictMode>
)