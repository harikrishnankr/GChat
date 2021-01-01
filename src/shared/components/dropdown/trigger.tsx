import React from 'react';

interface DropDownTriggerProps {
    openDropdown?: () => void;
    children?: React.ReactNode;
}

const DropDownTrigger = (props: DropDownTriggerProps) => {

    const openDropdown = () => {
        props.openDropdown && props.openDropdown();
    };

    return (
        <div onClick={openDropdown}>
            {props.children}
        </div>
    );
};

DropDownTrigger.displayName = 'DropDownTrigger';

export default DropDownTrigger;