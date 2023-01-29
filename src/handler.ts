import { bypassExposeHeadersIfNeeded, destinationUrlHeader } from "./header";
import { transformIncomingToOutgoingRequest } from "./request";
import { bozoResponse, corsResponse, unknownErrorResponse } from "./response";

export default function (req: Request): Promise<Response> {
    const headers = req.headers;

    if (req.method === 'OPTIONS') {
        return Promise.resolve(corsResponse(req));
    }

    if (headers.has(destinationUrlHeader)) {
        return relay(req);
    } else {
        return Promise.resolve(bozoResponse());
    }
}

async function relay(req: Request): Promise<Response> {
    const destinationRequest = transformIncomingToOutgoingRequest(req);

    try {
        const response = await fetch(destinationRequest, { body: destinationRequest.body });
        bypassExposeHeadersIfNeeded(req, response);

        return response;
    } catch (error) {
        return unknownErrorResponse();
    }
}