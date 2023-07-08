import { useContext, useEffect} from "react"

import AppointmentItem from "../appointmentItem.tsx/AppointmentItem";
import { AppointmentContext } from "../../context/appointments/AppointmentsContext";


function AppointmentList() {
	const {getActiveAppointments, activeAppointments} = useContext(AppointmentContext);

	useEffect(() => {
		getActiveAppointments();
	},[])


	return (
		<>	
			{activeAppointments.map(item => <AppointmentItem {...item} key={item.id}/>)}
		</>
	);
}

export default AppointmentList;
