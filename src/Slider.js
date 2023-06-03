import React from "react";
import Slider from "./App";

const App = () =>{
    const photos = [
        'https://otkritkit.ru/wp-content/uploads/krasivye-kartinki-s-bukvami-z-i-v-4.jpg',
        'https://s00.yaplakal.com/pics/pics_original/2/7/5/17247572.jpg',
        'https://drasler.ru/wp-content/uploads/2019/05/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D1%8D%D1%82%D0%BE-%D0%B2%D0%B0%D0%B6%D0%BD%D0%BE-%D0%B7%D0%BD%D0%B0%D1%82%D1%8C-023.jpg',
    ];
    return (
        <div>
            <h1>Мой слайдер фотографии</h1>
            <Slider photos = {photos}/>
        </div>
    )
}
export default App