import React, { useState } from 'react';
import CatchOutsideClick from '../outside-click';
import './dropdown.scss';

interface DropDownProps {
    outsideClick?: (event: any) => void;
    children?: React.ReactNode;
}

const DropDown = (props: DropDownProps) => {

    const [showDropdown, setDropdownVisibility] = useState(false);

    const closeDropDown = (event: any) => {
        props.outsideClick && props.outsideClick(event);
        setDropdownVisibility(false);
    };

    const openDropdown = () => {
        setDropdownVisibility(true);
    };

    const childrenWithProps = React.Children.map(props.children, child => {
        if (React.isValidElement(child)) {
            switch ((child.type as any).displayName) {
                case 'DropDownList':
                    return React.cloneElement(child, { showDropdown, closeDropDown });
                case 'DropDownTrigger':
                    return React.cloneElement(child, { openDropdown });
                default: break;
            }
        }
    })

    return (
        <CatchOutsideClick outsideClick={(event) => closeDropDown(event)}>
            <div className='dropdown-wrapper'>
                {childrenWithProps}
            </div>
        </CatchOutsideClick>
    )
};

export default DropDown;