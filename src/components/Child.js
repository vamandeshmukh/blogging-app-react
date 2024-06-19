import { useState } from "react";
import PropTypes from 'prop-types';

// const Child = (props) => {
const Child = ({ parentToChild = 'Tonu', childToParent }) => {

    const childData = 'Monu';
    // const parentDataInChild = props.parentToChild;
    const parentDataInChild = parentToChild;

    const sendDataToParent = () => {
        console.log(childData);
        childToParent(childData);
    };

    return (
        <>
            <h1>Child Component</h1>
            <p>Child data in child component: {childData}</p>
            <p>Parent data in child component: {parentDataInChild}</p>
            <button onClick={sendDataToParent}>Send data to parent</button>
            {/* {sendDataToParent()} */}
        </>
    );
}

Child.propTypes = {
    parentToChild: PropTypes.number.isRequired
};

export default Child;
