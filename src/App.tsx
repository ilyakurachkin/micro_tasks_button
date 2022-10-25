import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {

    const ButtonFooOne = (subscriber: string) => {
        console.log(subscriber)
    }

    const ButtonFooSecond = (subscriber: string) => {
        console.log(subscriber)
    }

    const ButtonFooThree = () => {
        console.log('im Stupid Button')
    }


    return (
        <>
            <Button  name={'MyYoutubeChanel-1'} callBack={()=>ButtonFooOne('im Ilya')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={()=>ButtonFooSecond('im Ivan')}/>
            <Button name={'MyYouTubeChanel-3'} callBack={ButtonFooThree}/>

        </>
    )
}
export default App;
