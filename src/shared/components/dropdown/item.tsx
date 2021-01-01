import React from 'react';

interface DropDownItemProps {
    onSelect?: () => void;
    children?: React.ReactNode;
}

const DropDownItem = (props: DropDownItemProps) => {

    const onSelect = () => props.onSelect && props.onSelect();

    return (
        <div className='item' onClick={onSelect}>
            {props.children}
        </div>
    );
};

DropDownItem.displayName = 'DropDownItem';

export default DropDownItem;