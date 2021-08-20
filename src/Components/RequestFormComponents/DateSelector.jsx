import { OwnLeaveDate } from '../DateTypes/OwnLeaveDate.jsx';
import { VacationDate } from '../DateTypes/VacationDate.jsx';
import { SickLeaveDate } from '../DateTypes/SickLeaveDate.jsx';


export const DateSelector = (props) => {

    switch (props.type) {
        case "Vacation leave":
            return <VacationDate request={props.request} />;
        case "Sick leave":
            return <SickLeaveDate request={props.request} />;
        case "Own expense leave":
            return <OwnLeaveDate request={props.request} />;
        default:
            return;
    }

}
