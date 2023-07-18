import Raact, { createContext, useReducer } from "react";
import reducer, { IAppointmentState } from "./reducer";

import useAppointmentService from "../../services/AppointmentService";

import { ActionTypes } from "./actions";

import { LoadingStatusOptions } from "../../hooks/http.hook";

const initialState: IAppointmentState = {
	allAppointments: [],
	activeAppointments: [],
	appointmentLoadingStatus: "idle",
};

interface ProviderProps {
	children: React.ReactNode;
}

interface AppointmentContextValue extends IAppointmentState {
	appointmentLoadingStatus: LoadingStatusOptions;
	getAppointments: () => void;
	getActiveAppointments: () => void;
}

export const AppointmentContext = createContext<AppointmentContextValue>({
	allAppointments: initialState.allAppointments,
	activeAppointments: initialState.activeAppointments,
	appointmentLoadingStatus: initialState.appointmentLoadingStatus,
	getAppointments: () => {},
	getActiveAppointments: () => {},
});

const AppointmentContextProvider = ({ children }: ProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { loadingStatus, getAllappoinments, getAllActiveAppointments } =
		useAppointmentService();

	const value: AppointmentContextValue = {
		allAppointments: state.allAppointments,
		activeAppointments: state.activeAppointments,
		appointmentLoadingStatus: loadingStatus,
		getAppointments: () => {
			getAllappoinments().then((data) =>
				dispatch({ type: ActionTypes.SET_ALL_APPOINTMENTS, payload: data })
			);
		},
		getActiveAppointments: () => {
			getAllActiveAppointments().then((data) =>
				dispatch({ type: ActionTypes.SET_ACTIVE_APPOINTMENTS, payload: data })
			);
		},
	};

	return (
		<AppointmentContext.Provider value={value}>
			{children}
		</AppointmentContext.Provider>
	);
};

export default AppointmentContextProvider;
