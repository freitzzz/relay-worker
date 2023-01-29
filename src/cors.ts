export default function (reqHeaders: Headers): Headers {
    return new Headers(
        {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': reqHeaders.get("Access-Control-Request-Headers")!,
            'Allow': 'GET,HEAD,PUT,PATCH,POST,DELETE',
            'Credentials': 'true',
        }
    );
}