import Light from "./light";
import TurnOffBtn from "./turnOff";
import TurnOnButton from "./turnOn";
import React, {useState} from "react";

const Lightt = () => {
      const [isOn, setIsOn] = useState(false);
    return (
        <>
            <TurnOnButton setIsOn={setIsOn} />
            <TurnOffBtn setIsOn={setIsOn} />
            <Light isOn={isOn} />
        </>
    )
}

export default Lightt;