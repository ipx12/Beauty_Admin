export default function hasRequiredFields(
	obj: Record<string, any>,
	requredFields: string[]
): boolean {
	return requredFields.every((field) => {
		return Object.hasOwn(obj, field);
	});
}
