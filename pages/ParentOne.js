import { useState } from "react"
import ChildOne from "./ChildOne";

export default function ParentOne(){
    const [data, setData] = useState();

    const parentToChild = () => {
        setData("This is the data from the parent page that will be passed to the child page")
    }
    return(
        <>
            <ChildOne parentToChild={data}/> 
            {/* When we click the button the child is going to show on the parent page */}
            <button onClick={() => parentToChild()}>Click parent to child</button>
        </>
    )
}