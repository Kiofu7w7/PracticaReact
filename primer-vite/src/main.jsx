import React from 'react';
import ReactDOM from 'react-dom/client'
import  App from './App';
import Carousel from './Components/Carousel';

const info = ["https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_27.jpg", "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_27.jpg", "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_27.jpg"]

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/*<App title='ESTO ES UN TITULO' subTitle='esto es un subtitulo' number={4}/>*/}
        <div style={{height: "20vh"}}>
            <Carousel data={info} autoPlay buttonStyle='text' interval={5000} />
        </div>
    </React.StrictMode>
)