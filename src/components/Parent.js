import { useState } from "react";
import Child from "./Child";

const Parent = () => {

    const parentData = 'Sonu';
    const [childInParent, setChildInParent] = useState('');

    const getDataFromChild = (data) => {
        console.log(data);
        setChildInParent(data);
    };

    return (
        <>
            <h1>Parent Component</h1>
            <p>Parent data in parent component: {parentData}</p>
            <p>Child data in parent component: {childInParent}</p>
            <Child childToParent={getDataFromChild} parentToChild={parentData} />
            {/* <Child childToParent={getDataFromChild} /> */}
        </>
    );
}

export default Parent;
