import { useContext, useEffect} from "react"

import Spinner from "../spinner/Spinner";
import Error from "../error/Error";

import AppointmentItem from "../appointmentItem.tsx/AppointmentItem";
import { AppointmentContext } from "../../context/appointments/AppointmentsContext";


function AppointmentList() {
	const {getActiveAppointments, activeAppointments, appointmentLoadingStatus} = useContext(AppointmentContext);

	useEffect(() => {
		getActiveAppointments();
	},[])

	if (appointmentLoadingStatus === 'loading') {
		return <Spinner/>
	} else if (appointmentLoadingStatus === 'error') {
		return (
			<>
				<Error/>
				<button className="schedule__reload" onClick={getActiveAppointments}>
					Try to reload
				</button>
			</>
		)
	}

	return (
		<>	
			{activeAppointments.map(item => <AppointmentItem {...item} key={item.id}/>)}
		</>
	);
}

export default AppointmentList;
