import React, {useEffect} from "react";

const Page = () => {
    useEffect(() => {

        document.title = "My cool App";
    }, []);

    return (
        <div>
            <p>Hello</p>
        </div>
    )

}
    export default Page