import { bozoCorsRedirectUrl } from "./url";
import { default as corsHeaders } from './cors';


export function bozoResponse(): Response {
    const init = <ResponseInit>{
        status: 301,
        headers: {
            location: bozoCorsRedirectUrl,
        }
    };

    return new Response(null, init);
}

export function corsResponse(req: Request): Response {
    return new Response(null, { headers: corsHeaders(req.headers) });
}

export function unknownErrorResponse(): Response {
    const init = <ResponseInit>{
        status: 599
    };

    return new Response(null, init);
}
