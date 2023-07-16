import { useState } from "react";
import Button from "./Button";
import BetBox from "./BetBox";
import axios from "axios";
function Controller(){
    const [hasWon, setHasWon] = useState(false);
    const [betDirection, setBetDirection] = useState("up");
    const handleClick = async () => {
        const url = "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new";
        await axios.get(url).then((res) =>{
            if(res.status == 200){
                console.log(res?.data)
                
                
            }
            else{
                console.log('error');
            }
        }).catch((er) =>{
            console.log(er.data, er.message);
        })
        setHasWon(!hasWon);
    }

    return <div className=" w-full md:w-[850px] lg:w-[1200px] mx-auto px-5 py-4 mt-10">
        <Button handleClick={handleClick} />
        <BetBox betDirection={betDirection} setBetDirection={setBetDirection}/>
    </div>
}

export default Controller;