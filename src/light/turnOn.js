
const TurnOnButton = ({setIsOn}) => {
    return <button onClick={() => setIsOn(true)}  className="bg-gray-400 font-bold p-2 ms-6 rounded-md hover:bg-gray-700 text-white">Turn On</button>
}
export default TurnOnButton;