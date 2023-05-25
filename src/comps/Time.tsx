import { useState,useEffect } from 'react';
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

interface TimeDetails {
    time: string,
    date: string
  }
export default function Time() {
    const [details, setDetails] = useState<TimeDetails>();

    useEffect(() => {
        update()
        setInterval(update,25000)
    },[])

    function update() {
        console.log(new Date().toLocaleTimeString())
        
        let clockstring = new Date().toLocaleTimeString().split(' ')
            .map((string, index) => {
                if (index !== 0) return string
                else return string.slice(0,-3)
            }).join(' ')
        
        let datestring = '';
        datestring += days[new Date().getDay()] + ' ';
        datestring += months[new Date().getMonth()] + ' ';
        datestring += new Date().getDate() + ', ';
        datestring += new Date().getFullYear();




        setDetails({
            time: clockstring,
            date: datestring
        })
    }
  
    return (
        <div className="Container--col Time">
            <span className="Time__Clock">{ details?.time }</span>
            <span className="Time__Date">{ details?.date }</span>
      </div>
    )
  }
  