
const TurnOffBtn = ({ setIsOn}) => {
    return <button onClick={() => setIsOn(false)} className="bg-blue-400 font-bold p-2 ms-6 rounded-md hover:bg-blue-700 text-white">Turn Off</button>
} 

export default TurnOffBtn;