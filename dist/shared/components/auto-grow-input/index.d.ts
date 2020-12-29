/// <reference types="react" />
import './auto-grow-input.scss';
interface AutoGroupProps {
    onInputUpdate?: (value: string) => void;
    value?: string;
}
declare const AutoGrowInput: (props: AutoGroupProps) => JSX.Element;
export default AutoGrowInput;
