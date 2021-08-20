import './style/App.scss';
import { Header } from './Components/EmployeePageComponents/Header.jsx'
import { LeaveRequestsComponent } from './Components/EmployeePageComponents/LeaveRequestsComponent.jsx';
import { NewVacationRequest } from './Components/EmployeePageComponents/NewVacationRequest.jsx';
import { Vacation } from './Components/EmployeePageComponents/Vacation.jsx';
export const App = () => {
  return (

    <div className="container">
      <Header />
      <Vacation />
      <NewVacationRequest />
      <LeaveRequestsComponent />
    </div>
  );
}

