import { alwaysIncludeBodyHeader, destinationUrlHeader, hostHeader } from "./header";

export function transformIncomingToOutgoingRequest(req: Request): Request {
    const headers = new Headers(req.headers);
    const alwaysIncludeBody = headers.has(alwaysIncludeBodyHeader);

    const url = headers.get(destinationUrlHeader)!;
    const method = req.method;

    let data: ReadableStream | null;

    if (!alwaysIncludeBody && !method.startsWith('P')) {
        data = null
    } else {
        data = req.body;
    }

    headers.delete(destinationUrlHeader);
    headers.delete(hostHeader);

    const init = <RequestInit>{
        headers: headers,
        method: method,
        body: data,
    };

    return new Request(url, init);
}