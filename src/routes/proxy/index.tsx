import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({ send, url, headers, request }) => {
    try {
        const urlParam = url.searchParams.get('url') || '';

        const response = await fetch(decodeURI(urlParam), {
            credentials: 'include',
            headers: {
                ...request.headers,
            },
        });

        response.headers.forEach((value: string, key: string) => {
            if (key === 'set-cookie') {
                const entries = value.split('; ');
                const newEntries = entries.map(entry => {
                    if (entry.indexOf('domain=') === 0) {
                        return `domain=${url.hostname}`;
                    }
                    return entry;
                });
                return headers.set('set-cookie', newEntries.join('; '));
            }

            if (key !== 'content-encoding') {
                headers.set(key, value);
            }
        });

        send(response.status, await response.text());
    } catch (e) {
        console.error(e);
    }
};
