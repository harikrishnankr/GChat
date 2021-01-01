import React, { Fragment } from 'react';

interface DropDownListProps {
    showDropdown?: boolean;
    children?: React.ReactNode;
    className?: string;
    render: (props: DropDownListProps) => JSX.Element;
    closeDropDown?: () => void;
}

const DropDownList = (props: DropDownListProps) => {

    return (
        <Fragment>
            {
                props.showDropdown ? <div className={`dropdown-list ${props.className}`}>
                    {props.render(props)}
                </div> : null 
            }
        </Fragment>
    );
};

DropDownList.displayName = 'DropDownList';

export default DropDownList;