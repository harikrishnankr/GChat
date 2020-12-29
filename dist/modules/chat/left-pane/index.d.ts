/// <reference types="react" />
import './left-pane.scss';
interface LeftPaneProps {
    onSelect?: () => void;
}
declare const LeftPane: (props: LeftPaneProps) => JSX.Element;
export default LeftPane;
