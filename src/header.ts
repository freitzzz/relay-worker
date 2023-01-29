export const destinationUrlHeader = 'x-relay-url';
export const bypassHeadersExposeHeader = 'x-bypass-expose-headers';
export const alwaysIncludeBodyHeader = 'x-include-body';
export const accessControlHeadersExposeHeader = 'access-control-expose-headers';
export const hostHeader = 'host';

export function bypassExposeHeadersIfNeeded(req: Request, res: Response): void {
    if (req.headers.has(bypassHeadersExposeHeader)) {
        res.headers.set(accessControlHeadersExposeHeader, '*');
    }
}