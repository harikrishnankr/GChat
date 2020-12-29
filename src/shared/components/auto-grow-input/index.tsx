import React, { useEffect, useRef, useState } from 'react';
import CatchOutsideClick from '../outside-click';
import './auto-grow-input.scss';

interface AutoGroupProps {
    onInputUpdate?: (value: string) => void;
    value?: string;
}

const AutoGrowInput = (props: AutoGroupProps) => {

    const [isClicked, onAgFocus] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!props.value) {
            setInputValue('');
        }
    });

    function updateFocus (focus: boolean) {
        onAgFocus(focus);
        if (focus) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100)
        }
    };

    function updateInput(value: string) {
        props.onInputUpdate && props.onInputUpdate(value);
        setInputValue(value)
    }

    return (
        <CatchOutsideClick className='ag-input-wrapper' outsideClick={() => updateFocus(false)} onClick={() => updateFocus(true)}>
            {(isClicked || inputValue) ? (
                <input ref={inputRef} value={props.value} onChange={(event) => updateInput(event.target.value)}/>
            ) : null }
            { (!isClicked && !inputValue) ? <div className='ag-placeholder'>Type a message</div> : null }
        </CatchOutsideClick>
    );
};

export default AutoGrowInput;