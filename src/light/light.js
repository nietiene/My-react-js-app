
const Light = ({isOn}) => {
    
    return <div style={{backgroundColor : isOn ? "yellow" : "gray"}} className="w-full h-20">
        The light is {isOn ? "ON": "OFF"}
    </div> 
}

export default Light;