import { useContext, useEffect } from "react";
import AppointmentItem from "../appointmentItem.tsx/AppointmentItem";
import { AppointmentContext } from "../../context/appointments/AppointmentsContext";
import dayjs from "dayjs";
import Spinner from "../spinner/Spinner";
import Error from "../error/Error";

function HistoryList() {
	const {
		getAppointments,
		allAppointments,
		appointmentLoadingStatus,
		calendarDate,
		setDateAndFilter,
	} = useContext(AppointmentContext);

	useEffect(() => {
		getAppointments();
	}, [calendarDate]);

	useEffect(() => {
		setDateAndFilter([null, null]);
	}, []);

	if (appointmentLoadingStatus === "loading") {
		return <Spinner />;
	} else if (appointmentLoadingStatus === "error") {
		return (
			<>
				<Error />
				<button className="schedule__reload" onClick={getAppointments}>
					Try to reload
				</button>
			</>
		);
	}

	return (
		<>
			{allAppointments
				.sort((a, b) => {
					return (
						dayjs(a.date).diff(undefined, "s") -
						dayjs(b.date).diff(undefined, "s")
					);
				})
				.map((item) => {
					return <AppointmentItem {...item} key={item.id} history={true} />;
				})}
		</>
	);
}

export default HistoryList;
