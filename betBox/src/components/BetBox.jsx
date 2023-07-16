import BetButton from "./BetButton";

function BetBox({betDirection, setBetDirection}){
    return <div className="mt-10">
        <div className="py-2 border bg-blue-100">Layer 1</div>
        <div className="flex justify-between py-2 border bg-red-100">
            <div className=" w-full py-12 text-center"><BetButton direction="down" betDirection={betDirection} setBetDirection={setBetDirection}/></div>
            <div className=" w-full py-12 text-center"><BetButton direction="up"betDirection={betDirection} setBetDirection={setBetDirection}/></div>
        </div>
        <div className="py-2 border bg-fuchsia-100">Layer 3</div>
    </div>
}

export default BetBox;