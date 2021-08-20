import { useSelector } from "react-redux";
import { RequestItem } from "./RequestItem.jsx";

export const YearRequests = (props) => {

    let requests = useSelector(state => state.requests[props.year]);

    return <div className="list-requests">
        <div className='years-field'><span>{props.year} Year</span></div>
        {requests.map((request, index) => {
            return <RequestItem request={request} key={index} />
        })}

    </div>
}
