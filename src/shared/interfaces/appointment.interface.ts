export interface IAppointment {
	id: number;
	date: string;
	name: string;
	service: string;
	phone: string;
	canceled: boolean;
}

export type LoadingStatus = string;

export type ActiveAppointmet = Omit<IAppointment, "canceled">;
