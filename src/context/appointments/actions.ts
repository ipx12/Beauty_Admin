import {
	IAppointment,
	ActiveAppointmet,
} from "../../shared/interfaces/appointment.interface";

export enum ActionTypes {
	SET_ACTIVE_APPOINTMENTS = "SET_ACTIVE_APPOINTMENTS",
	SET_ALL_APPOINTMENTS = "SET_ALL_APPOINTMENTS",
}

export type IAppointmentAction =
	| {
			type: ActionTypes.SET_ACTIVE_APPOINTMENTS;
			payload: ActiveAppointmet[];
	  }
	| {
			type: ActionTypes.SET_ALL_APPOINTMENTS;
			payload: IAppointment[];
	  };
