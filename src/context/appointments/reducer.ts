import { AppointmentAction, ActionTypes } from "./actions";
import {
	IAppointment,
	ActiveAppointmet,
} from "../../shared/interfaces/appointment.interface";
import { LoadingStatusOptions } from "../../hooks/http.hook";

export interface IAppointmentState {
	allAppointments: IAppointment[] | [];
	activeAppointments: ActiveAppointmet[] | [];
	appointmentLoadingStatus: LoadingStatusOptions;
}

export default function reducer(
	state: IAppointmentState,
	action: AppointmentAction
): IAppointmentState {
	switch (action.type) {
		case ActionTypes.SET_ALL_APPOINTMENTS:
			return {
				...state,
				allAppointments: action.payload,
				appointmentLoadingStatus: "idle",
			};
		case ActionTypes.SET_ACTIVE_APPOINTMENTS:
			return {
				...state,
				activeAppointments: action.payload,
				appointmentLoadingStatus: "idle",
			};
		case ActionTypes.FETCHING_APPOINTMENTS:
			return { ...state, appointmentLoadingStatus: "loading" };
		case ActionTypes.ERROR_FETCHING_APPOINTMENTS:
			return { ...state, appointmentLoadingStatus: "error" };
		case ActionTypes.SET_ACTIVE_APPOINTMENTS:
			return {
				...state,
				activeAppointments: action.payload,
			};
		default:
			return state;
	}
}
