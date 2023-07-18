import { useContext, useEffect } from "react";
import AppointmentItem from "../appointmentItem.tsx/AppointmentItem";
import { AppointmentContext } from "../../context/appointments/AppointmentsContext";
import dayjs from "dayjs";

function HistoryList() {
	const { getAppointments, allAppointments, appointmentLoadingStatus } =
		useContext(AppointmentContext);

	useEffect(() => {
		getAppointments();
	}, []);

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
					return (
						<AppointmentItem
							openModal={function (state: number): void {
								throw new Error("Function not implemented.");
							}}
							getActiveAppointments={function (): void {
								throw new Error("Function not implemented.");
							}}
							{...item}
							key={item.id}
							history={true}
						/>
					);
				})}
		</>
	);
}

export default HistoryList;
