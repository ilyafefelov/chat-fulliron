import axios from "axios";

// console.log("Wit.ai URL:", useRuntimeConfig());

export const sendMessageToWit = async (message) => {
	console.log('runbtimeConfig:', useRuntimeConfig()	);
	// console.log('Sending message to Wit.ai:', message);
	console.log("Wit.ai URL:", useRuntimeConfig().public.witAiUrl);
	console.log("Wit.ai Authorization:", useRuntimeConfig().public.witAiAuthorization);
	try {
		const response = await axios.post(
			useRuntimeConfig().public.witAiUrl,
			{
				type: "message",
				message: message,
			},
			{
				headers: {
					Authorization: useRuntimeConfig().public.witAiAuthorization,
					"Content-Type": "application/json",
				},
			}
		);
		// console.log('Received data:', response.data);
		return response.data;
	} catch (error) {
		console.error("Error sending message to Wit.ai:", error);
		throw error;
	}
};
