import { useHttp } from "../hooks/http.hook";
import hasRequiredFields from "../utils/hasRequiredFields";
import dayjs from "dayjs";

import {
	IAppointment,
	ActiveAppointmet,
} from "../shared/interfaces/appointment.interface";

const requredFields = ["id", "date", "name", "service", "phone", "canceled"];

const useAppointmentService = () => {
	const { loadingStatus, request } = useHttp();

	const _apiBase = "http://localhost:3001/appointments";

	const getAllappoinments = async (): Promise<IAppointment[]> => {
		const res = await request({ url: _apiBase });
		if (
			res.every((item: IAppointment) => hasRequiredFields(item, requredFields))
		) {
			return res;
		} else {
			throw new Error("Data doesent have all the filds");
		}
	};

	const getAllActiveAppointments = async () => {
		const base = await getAllappoinments();
		const transformed: ActiveAppointmet[] = base
			.filter((item) => {
				return !item.canceled && dayjs(item.date).diff(undefined, "minute") > 0;
			})
			.map((item) => {
				return {
					id: item.id,
					date: item.date,
					name: item.name,
					service: item.service,
					phone: item.phone,
				};
			});

		return transformed;
	};

	return { loadingStatus, getAllappoinments, getAllActiveAppointments };
};

export default useAppointmentService;
