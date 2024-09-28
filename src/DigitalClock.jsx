import React,{useState,useEffect} from 'react'
import './Digitalclock.css';
let DigitalClock  = () => {

    const[time,settime] = useState(new Date())
    useEffect(() => {
        const intervalID = setInterval(()=>{
            settime(new Date());
        },1000)
        return () => {
            clearInterval(intervalID);
        }
    },[]);
    let formatTime = () => {

        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM":"AM";

        hours = hours % 12 || 12
        return `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)} ${meridiem}`
    }
    let padzero=(number)=>{
        return (number < 10 ? "0":"") + number;
    }
    return (
        <div className='clock-container'>
            <div className='clock'>
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

export default DigitalClock
