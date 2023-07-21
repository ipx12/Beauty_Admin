import { Calendar as LibCalendar } from "react-calendar";
import { useContext, useEffect } from "react";

import { AppointmentContext } from "../../context/appointments/AppointmentsContext";
import "react-calendar/dist/Calendar.css";
import "./calendar.scss";

function Calendar() {
	const { calendarDate, setDateAndFilter } = useContext(AppointmentContext);

	return (
		<div className="calendar">
			<LibCalendar
				value={calendarDate}
				onChange={(value) => {
					setDateAndFilter(value);
				}}
				selectRange={true}
			/>
			<button
				className="calendar__reload"
				onClick={() => setDateAndFilter([null, null])}
			>
				Clear filter
			</button>
		</div>
	);
}

export default Calendar;
