import { IAppointmentAction, ActionTypes } from "./actions";
import {
	IAppointment,
	ActiveAppointmet,
} from "../../shared/interfaces/appointment.interface";

export interface IInitialState {
	allAppointments: IAppointment[] | [];
	activeAppointments: ActiveAppointmet[] | [];
}

export default function reducer(
	state: IInitialState,
	action: IAppointmentAction
) {
	switch (action.type) {
		case ActionTypes.SET_ALL_APPOINTMENTS:
			return { ...state, allAppointments: action.payload };
		case ActionTypes.SET_ACTIVE_APPOINTMENTS:
			return { ...state, activeAppointments: action.payload };
		default:
			return state;
	}
}
