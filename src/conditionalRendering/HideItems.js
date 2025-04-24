import React, {useState} from "react";

const ShowDetails = () => {

    const [showDetail, SetShowDetail] = useState(true);
   const [answer, setAnswer] = useState(false);

    const product = {
        name: "Iphone",
        price: 25000
      }
    return (
        <div>
            <h2>{product.name}</h2>
            <button onClick={() => SetShowDetail(!showDetail)}>{showDetail ? "Hide Details" : "Show Details"}</button>
          <div>
            {showDetail && (
                <p>{product.price}</p>
            )}
          </div>
          <h2>What is react</h2>
          <button onClick={() => setAnswer(!answer)}>{answer ? "Hide Answer" : "Show Answer"}</button>
          {answer && (
            <p>React is a JavaScript library for building UI!</p>
          )}
        </div>
    )
}
export default ShowDetails