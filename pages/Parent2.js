import { useState } from "react"
import Child2 from "./Child2";

export default function Parent2() {
    const [data, setData] = useState();

    const childToParent = (childData) => {
        setData(childData)
    }

    return(
        <>
            {data}
            <Child2 childParent={childToParent}/>
        </>
    )
}