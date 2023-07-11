import { useState, useCallback } from "react";

type HTTPRequestMethods = "GET" | "POST" | "PATCH" | "DELETE";
export type LoadingStatusOptions = "idle" | "loading" | "error";

interface HTTPHeaders {
	[key: string]: string;
}

// type HTTPHeaders = Record<string, string>

interface RequstConfig {
	url: string;
	method?: HTTPRequestMethods;
	body?: string | null;
	headers?: HTTPHeaders;
}

export const useHttp = () => {
	const [loadingStatus, setLoadingStatus] =
		useState<LoadingStatusOptions>("idle");

	const request = useCallback(
		async ({
			url,
			method = "GET",
			body = null,
			headers = { "Content-Type": "application/json" },
		}: RequstConfig) => {
			setLoadingStatus("loading");

			try {
				const responce = await fetch(url, { method, body, headers });

				if (!responce.ok) {
					throw new Error(`Could not fetch ${url}, status: ${responce.status}`);
				}

				const data = await responce.json();

				setLoadingStatus("idle");

				return data;
			} catch (e) {
				setLoadingStatus("error");
				throw e;
			}
		},
		[]
	);

	return { loadingStatus, request };
};
