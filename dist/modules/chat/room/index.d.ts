/// <reference types="react" />
import './room.scss';
interface RoomProps {
    goBack?: () => void;
}
declare const Room: (props: RoomProps) => JSX.Element;
export default Room;
