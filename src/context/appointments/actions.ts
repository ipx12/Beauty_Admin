import {
	IAppointment,
	ActiveAppointmet,
} from "../../shared/interfaces/appointment.interface";

export enum ActionTypes {
	SET_ACTIVE_APPOINTMENTS = "SET_ACTIVE_APPOINTMENTS",
	SET_ALL_APPOINTMENTS = "SET_ALL_APPOINTMENTS",
	FETCHING_APPOINTMENTS = "FETCHING_APPOINTMENTS",
	ERROR_FETCHING_APPOINTMENTS = "ERROR_FETCHING_APPOINTMENTS",
	CANCEL_ACTIVE_APPOINTMENT = "CANCEL_ACTIVE_APPOINTMENT",
}

export type AppointmentAction =
	| {
			type: ActionTypes.SET_ACTIVE_APPOINTMENTS;
			payload: ActiveAppointmet[];
	  }
	| {
			type: ActionTypes.SET_ALL_APPOINTMENTS;
			payload: IAppointment[];
	  }
	| {
			type: ActionTypes.FETCHING_APPOINTMENTS;
	  }
	| {
			type: ActionTypes.ERROR_FETCHING_APPOINTMENTS;
	  }
	| {
			type: ActionTypes.CANCEL_ACTIVE_APPOINTMENT;
			payload: ActiveAppointmet[];
	  };
